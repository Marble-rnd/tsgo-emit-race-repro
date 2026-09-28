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

const emitOutput = await program.emitToString(EmitOnly.OnlyJs);
const emittedSourceFiles = new Set(
  [...emitOutput.outputFiles.entries()].filter(([p]) => p.endsWith('.js')).map(([, o]) => o.sourceFileName),
);
const missing = expected.filter((f) => !emittedSourceFiles.has(f));

if (missing.length === 0) {
  console.log(JSON.stringify({ label, result: 'no failure this run' }));
} else {
  const checks = [];
  for (const missingPath of missing) {
    const sourceFile = await program.getSourceFile(missingPath);
    const isExternal = sourceFile ? await program.isSourceFileFromExternalLibrary(sourceFile) : undefined;
    checks.push({ file: path.relative(ROOT, missingPath), foundInProgram: !!sourceFile, isSourceFileFromExternalLibrary: isExternal });
  }
  console.log(JSON.stringify({ label, missingCount: missing.length, checks }, null, 2));
}

await program.dispose();
await api.close();
process.exit(0);
