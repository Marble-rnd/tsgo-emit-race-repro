// Tests whether program.getJavaScriptEmit(sources) — given the FULL, deterministic file list
// from getSourceFileNames() — avoids the bug that emitToString() hits. Uses the ORIGINAL
// index.ts-only root file list (not the all-files-as-roots workaround) so the misclassification
// condition is actually present to test against.
import { API, EmitOnly } from 'typescript-next/unstable/async';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

function listWorkspaceEntryFiles() {
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
const rootFiles = [...new Set([...listWorkspaceEntryFiles(), ...parsed.fileNames])]; // index.ts only
const program = await api.createProgram(rootFiles, compilerOptions, { configFileParsingDiagnostics: parsed.errors });

// The deterministic, always-complete file list.
const allSourceFileNames = await program.getSourceFileNames();

// Targeted emit, passing every known file explicitly, instead of whole-program emitToString().
const emitOutput = await program.getJavaScriptEmit(allSourceFileNames);
const emittedSourceFiles = new Set(
  [...emitOutput.outputFiles.entries()].filter(([p]) => p.endsWith('.js')).map(([, o]) => o.sourceFileName),
);
const missing = expected.filter((f) => !emittedSourceFiles.has(f)).map((f) => path.relative(ROOT, f));

await program.dispose();
await api.close();

console.log(
  JSON.stringify({
    label,
    getSourceFileNamesCount: allSourceFileNames.length,
    expectedCount: expected.length,
    getJavaScriptEmitJsCount: emittedSourceFiles.size,
    missingCount: missing.length,
    missing,
  }),
);
process.exit(0);
