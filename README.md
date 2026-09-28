# tsgo-emit-race-repro

Minimal, standalone reproduction of a bug found in TypeScript's native (Go-ported) compiler API
(`typescript-next` / `@typescript/native-preview`, the `unstable/async` and `unstable/sync`
client surfaces): **`Program.emitToString()` intermittently omits real source files that are
genuinely part of the program, because they get nondeterministically misclassified as
"external library" files** — with `emitSkipped: false` and no diagnostics indicating anything
went wrong (which makes sense once you know the mechanism: skipping a real `node_modules` file
during emit is normal, silent, correct behavior — the bug is that these files aren't actually
external).

Observed on `7.1.0-dev.20260915.1`, `7.1.0-dev.20260926.1`, and `7.1.0-dev.20260928.1` (the
version pinned in this repo's `package.json`).

## What this demonstrates

- A synthetic workspace of 150 packages (`packages/lib-000` .. `packages/lib-149`), each with
  8 internal source files chained by relative import (`file-0.ts` → `file-1.ts` → ... →
  `file-7.ts`) and one entry file (`src/index.ts`) that re-exports them and imports from one
  other package via its package name (`@repro/lib-XXX`, resolved through a Yarn-workspace
  `node_modules` symlink) — plus an `app` package whose 70 files each import a few libs
  directly. This is a synthetic stand-in for a real ~150-package Yarn workspace monorepo, where
  we first hit this bug.
- A `Program` is built with **every package's own `src/index.ts` passed as an explicit root
  file**, alongside the app's own files (`scripts/build-once.mjs`) — a common, legitimate
  pattern (used to avoid a *different*, already-understood "external library" misclassification
  of package entry points reached only via `node_modules`; see below), not something contrived
  to trigger this bug.
- One whole-program `program.emitToString(EmitOnly.OnlyJs)` call is made, and the resulting
  `.js` output count is compared against every source file that's actually on disk.

## Result

**Roughly 1 in 3 to 1 in 2 isolated, single-process runs** (no concurrency with anything else
needed at all — see below) produce fewer `.js` outputs than expected. The pattern is completely
consistent across every failing run we've observed:

- The missing files are always ones reached **only via a relative import from within their own
  package** — never a file passed explicitly as a root, and never reached via a bare
  package-name import themselves.
- The missing files always come out in **exact multiples of one package's full internal file
  count** (8) — an entire package's internal file chain vanishes as a complete unit, never a
  partial/scattered subset. We've seen 1, 2, and 3 whole packages drop out in a single run.
- `emitOutput.emitSkipped` is `false` and `emitOutput.diagnostics` is empty on every run,
  passing or failing.
- Retrying `emitToString()` again on the same, already-built `Program` instance returns the
  identical (still incomplete) result — the shortfall is baked into that `Program`'s state, not
  a transient per-call skip.

### The confirmed mechanism

We proved this isn't a file-discovery problem: `program.getSourceFileNames()` **always**
returns the full, correct file count (1476, including every missing file) on every run, passing
or failing (`scripts/check-getsourcefiles.mjs`). The Program genuinely knows about every file,
every time.

We then checked `program.isSourceFileFromExternalLibrary()` directly on every missing file, on
every failing run (`scripts/check-external.mjs`). **It returns `true` for 100% of missing
files, on every failure, with zero exceptions**, even though:

- `program.getSourceFile(path)` finds the file (it's genuinely in the program), and
- the file is never reached via a `node_modules`-traversing import at all — only via a plain
  relative import (`./file-N`) from another file in the exact same package directory.

This traces directly to `tsc/internal/compiler/emitter.go`'s `sourceFileMayBeEmitted`, which
calls `host.IsSourceFileFromExternalLibrary(sourceFile)` →
`p.sourceFilesFoundSearchingNodeModules.Has(file.Path())` — a set populated once during program
construction/parsing. Our working theory: when a package is reachable **both** as an explicit
root (or via a purely relative-import chain) **and** via a `node_modules`-symlinked
package-name import from elsewhere (as ours are, by design, to mirror a real Yarn workspace),
whichever resolution edge to that package "wins" the race to be recorded first determines
whether its internal files inherit an incorrect "found searching node_modules" classification —
non-deterministically, depending on goroutine scheduling. We have **not** traced the exact
interleaving in the Go source; this is the observed mechanism, not a proven code-level root
cause.

Run it yourself:

```bash
yarn install
node scripts/stress-test.mjs 20          # pass/fail summary across N isolated trials
node scripts/check-getsourcefiles.mjs    # confirms getSourceFileNames() is always complete
node scripts/check-external.mjs          # confirms isSourceFileFromExternalLibrary() on any
                                          # missing file from that run, if one occurs
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

```json
{
  "label": "ext-4",
  "missingCount": 8,
  "checks": [
    { "file": "packages/lib-001/src/file-0.ts", "foundInProgram": true, "isSourceFileFromExternalLibrary": true },
    ...
  ]
}
```

## Why this looks like a concurrency bug, not a logic bug

- It only ever manifests as files being **misclassified as external and silently skipped**,
  never wrong/stale content — and never with a crash, panic, or error of any kind.
- A given `Program`'s result is internally consistent with itself on retry (same
  misclassification every time), but **different fresh `Program`s built from the identical
  config and root-file list produce different results, run to run** — classic symptom of a race
  whose outcome gets "locked in" once resolved, rather than a deterministic logic error.
- No concurrent *external* process is required to see it — the variance appears to come from
  the compiler's own internal parallelism (goroutines processing package resolution across the
  machine's available cores) rather than from contention with anything else running on the
  machine. We originally found this while racing two full builds of a large monorepo against
  each other (where it reproduced far more reliably, ~60-100% of paired runs), then found this
  smaller repro reproduces it in complete isolation.

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

Our manifestation (files silently excluded from emit via an incorrect external-library
classification, rather than phantom `TS2307` errors) may be a different instance of the same
underlying class rather than a regression of the fixed one.

## Repo layout

- `scripts/generate.mjs` — regenerates the synthetic workspace (already committed; re-run only
  if you want to change the scale/shape).
- `scripts/build-once.mjs` — builds one `Program` and runs one `emitToString` call, exporting
  `buildOnce()` for reuse and runnable directly for a single JSON result line.
- `scripts/diff-run.mjs` — same, plus diffs the result against every file actually on disk and
  reports exactly what's missing.
- `scripts/stress-test.mjs` — runs `diff-run.mjs` N times as fresh child processes and reports
  a pass/fail summary.
- `scripts/check-getsourcefiles.mjs` — proves `getSourceFileNames()` is always complete, even
  on runs where `emitToString` is not.
- `scripts/check-external.mjs` — proves every missing file is misclassified by
  `isSourceFileFromExternalLibrary()`.
