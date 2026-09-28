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
const rootFiles = [...new Set([...listWorkspaceEntryFiles(), ...parsed.fileNames])];
const program = await api.createProgram(rootFiles, compilerOptions, { configFileParsingDiagnostics: parsed.errors });

// Check BEFORE any emit call — does the program's own file manifest already reflect
// the shortfall, or does it only show up in emitToString's output?
const sourceFileNames = await program.getSourceFileNames();
const sourceFilesSet = new Set(sourceFileNames);
const missingFromSourceFiles = expected.filter((f) => !sourceFilesSet.has(f)).map((f) => path.relative(ROOT, f));

const emitOutput = await program.emitToString(EmitOnly.OnlyJs);
const emittedSourceFiles = new Set(
  [...emitOutput.outputFiles.entries()].filter(([p]) => p.endsWith('.js')).map(([, o]) => o.sourceFileName),
);
const missingFromEmit = expected.filter((f) => !emittedSourceFiles.has(f)).map((f) => path.relative(ROOT, f));

await program.dispose();
await api.close();

console.log(
  JSON.stringify({
    label,
    expectedCount: expected.length,
    getSourceFileNamesCount: sourceFileNames.length,
    missingFromGetSourceFileNamesCount: missingFromSourceFiles.length,
    missingFromGetSourceFileNames: missingFromSourceFiles,
    emitJsCount: emittedSourceFiles.size,
    missingFromEmitCount: missingFromEmit.length,
    missingFromEmit,
  }),
);
process.exit(0);
