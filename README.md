# tsgo-emit-race-repro

Minimal, standalone reproduction of a bug found in TypeScript's native (Go-ported) compiler API
(`typescript-next` / `@typescript/native-preview`, the `unstable/async` and `unstable/sync`
client surfaces): **`Program.emitToString()` (and the underlying `Program`'s known file set)
intermittently omits real source files, with `emitSkipped: false` and no diagnostics indicating
anything went wrong.**

Observed on `7.1.0-dev.20260915.1`, `7.1.0-dev.20260926.1`, and `7.1.0-dev.20260928.1` (the
version pinned in this repo's `package.json`).

## What this demonstrates

- A synthetic workspace of 150 packages (`packages/lib-000` .. `packages/lib-149`), each with
  8 internal source files chained by import (`file-0.ts` → `file-1.ts` → ... → `file-7.ts`) and
  one entry file (`src/index.ts`) that re-exports them and imports from one other package —
  plus an `app` package whose 70 files each import a few libs directly. This is a synthetic
  stand-in for a real ~150-package Yarn/npm workspace monorepo, where we first hit this bug.
- A `Program` is built with **every package's own `src/index.ts` passed as an explicit root
  file**, alongside the app's own files (`scripts/build-once.mjs`) — this is a common,
  legitimate pattern (used to avoid an unrelated, already-understood "external library"
  emit-skip classification for symlinked workspace packages, see comments in that file), not
  something contrived to trigger this bug.
- One whole-program `program.emitToString(EmitOnly.OnlyJs)` call is made, and the resulting
  `.js` output count is compared against every source file that's actually on disk.

## Result

**Roughly 1 in 3 to 1 in 2 isolated, single-process runs** (no concurrency with anything else
needed at all — see below) produce fewer `.js` outputs than expected. The pattern is completely
consistent across every failing run we've observed:

- The missing files are always ones reached **only transitively** (via another file's import),
  never one of the files passed explicitly as a root (`src/index.ts` always survives).
- The missing files always come out in **exact multiples of 8** — i.e. one package's *entire*
  internal file chain (`file-0.ts` through `file-7.ts`) vanishes as a complete unit, never a
  partial/scattered subset of it. We've seen 1, 2, and 3 whole packages drop out in a single run.
- `emitOutput.emitSkipped` is `false` and `emitOutput.diagnostics` is empty on every run,
  passing or failing — there is no signal in the response that anything is wrong.
- Retrying `emitToString()` again on the *same*, already-built `Program` instance returns the
  identical (still incomplete) result — the shortfall is baked into that `Program`'s state at
  construction/parse time, not a transient per-call skip.

Run it yourself:

```bash
yarn install
node scripts/stress-test.mjs 20
```

Example output from a real run:

```
[1/15] jsOutputCount=1420/1420 missing=0 OK
...
[4/15] jsOutputCount=1412/1420 missing=8 INCOMPLETE
...
4 / 15 trials produced incomplete emit output (missing files with emitSkipped: false, no diagnostics).
Missing files by failing trial:
 - packages/lib-061/src/file-0.ts, packages/lib-061/src/file-1.ts, ... (8 files, one full package)
```

## Why this looks like a concurrency bug, not a logic bug

- It only ever manifests as files being **missing**, never wrong/stale — and never with a
  crash, panic, or error of any kind.
- A given `Program`'s result is internally consistent with itself on retry (same missing set
  every time), but **different fresh `Program`s built from the identical config and root-file
  list produce different results, run to run** — classic symptom of a race whose outcome gets
  "locked in" once resolved, rather than a deterministic logic error.
- No concurrent *external* process is required to see it — the variance appears to come from
  the compiler's own internal parallelism (goroutines processing package discovery/parsing
  across the machine's available cores) rather than from contention with anything else running
  on the machine. We originally found this while racing two full builds of a large monorepo
  against each other (where it reproduced far more reliably, ~60-100% of paired runs), then
  found this smaller repro reproduces it in complete isolation.

## Related upstream reports

This looks like it may be the same general bug class as:

- [microsoft/typescript-go#3526](https://github.com/microsoft/typescript-go/issues/3526) —
  "Non-deterministic error count in multi-threaded mode" (module resolution races causing
  phantom `TS2307` errors), whose reporter's own hypothesis was an unsynchronized shared
  module-resolution cache. Narrowly fixed by
  [microsoft/typescript-go#3534](https://github.com/microsoft/typescript-go/pull/3534) (a
  path-normalization / cache-key bug in one specific resolution function).
- [microsoft/typescript-go#3806](https://github.com/microsoft/typescript-go/issues/3806) — a
  follow-up suspecting a different, unconfirmed race site in the same general area; closed only
  for lack of a shareable repro, not disproven.

Our manifestation (missing emit output, not phantom `TS2307` errors) may be a different
instance of the same underlying class rather than a regression of the fixed one. We looked at
`tsc/internal/compiler/filesparser.go`'s concurrent file-discovery protocol
(`filesParser.taskDataByPath`, a path-keyed `SyncMap` with per-path-mutex-guarded task
registration feeding into `collectFiles`'s `if !task.loaded { continue }`) as a structurally
plausible site — files reached only transitively go through the recursive "queue this file's
own sub-tasks" step in `filesParser.start()`, which lines up with our observation that only
non-root files are ever affected — but we have **not** proven an exact interleaving; flagging
it as a candidate area to look at, not a confirmed root cause.

## Repo layout

- `scripts/generate.mjs` — regenerates the synthetic workspace (already committed; re-run only
  if you want to change the scale/shape).
- `scripts/build-once.mjs` — builds one `Program` and runs one `emitToString` call, exporting
  `buildOnce()` for reuse and runnable directly for a single JSON result line.
- `scripts/diff-run.mjs` — same, plus diffs the result against every file actually on disk and
  reports exactly what's missing.
- `scripts/stress-test.mjs` — runs `diff-run.mjs` N times as fresh child processes and reports
  a pass/fail summary.
