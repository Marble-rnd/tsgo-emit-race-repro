// Revised two-pass approach: discovery pass seeded with entry points only (proven to give a
// complete getSourceFileNames() — see check-getsourcefiles.mjs), then re-root the REAL program
// with that full, real, discovered closure. Should exclude dead/unreferenced files (nothing
// unreachable is ever discovered) without needing to walk the filesystem for the actual build.
import { API, EmitOnly } from 'typescript-next/unstable/async';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

function listEntryPoints() {
  const base = path.join(ROOT, 'packages');
  const files = [];
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const srcIndex = path.join(base, entry.name, 'src/index.ts');
    if (fs.existsSync(srcIndex)) files.push(srcIndex);
  }
  return files;
}

function allExpectedFiles() {
  const files = [];
  const base = path.join(ROOT, 'packages');
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const srcDir = path.join(base, entry.name, 'src');
    for (const f of fs.readdirSync(srcDir)) files.push(path.join(srcDir, f));
  }
  const appSrc = path.join(ROOT, 'app', 'src');
  for (const f of fs.readdirSync(appSrc)) files.push(path.join(appSrc, f));
  return files;
}

const expected = allExpectedFiles();
const label = process.argv[2] ?? 'run';

const api = new API({ cwd: ROOT });
const configFile = path.join(ROOT, 'app/tsconfig.json');
const parsed = await api.parseConfigFile(configFile);
const compilerOptions = { ...parsed.options, noEmit: false };

// Discovery pass: entry points only, real module resolution finds the rest.
const discoveryRoots = [...new Set([...listEntryPoints(), ...parsed.fileNames])];
const discovery = await api.createProgram(discoveryRoots, compilerOptions, { configFileParsingDiagnostics: parsed.errors });
const allFiles = await discovery.getSourceFileNames();
await discovery.dispose();

const workspaceFiles = allFiles.filter((f) => !f.includes('/node_modules/'));
const rootFiles = [...new Set([...workspaceFiles, ...parsed.fileNames])];

const program = await api.createProgram(rootFiles, compilerOptions, { configFileParsingDiagnostics: parsed.errors });
const emitOutput = await program.emitToString(EmitOnly.OnlyJs);
const emittedSourceFiles = new Set(
  [...emitOutput.outputFiles.entries()].filter(([p]) => p.endsWith('.js')).map(([, o]) => o.sourceFileName),
);
const missing = expected.filter((f) => !emittedSourceFiles.has(f)).map((f) => path.relative(ROOT, f));

await program.dispose();
await api.close();

console.log(
  JSON.stringify({
    label,
    discoveryRootCount: discoveryRoots.length,
    finalRootCount: rootFiles.length,
    expectedCount: expected.length,
    jsOutputCount: emittedSourceFiles.size,
    missingCount: missing.length,
    missing,
  }),
);
process.exit(0);
