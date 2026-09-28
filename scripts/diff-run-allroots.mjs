// Workaround candidate: pass EVERY file within each workspace package as an explicit root,
// not just its index.ts entry point. Root files are never misclassified as external in any
// of our testing — only transitively-reached files are. If this hypothesis is right, listing
// every file as a root should eliminate the misclassification entirely.
import { API, EmitOnly } from 'typescript-next/unstable/async';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

function listAllWorkspaceFiles() {
  const base = path.join(ROOT, 'packages');
  const files = [];
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const srcDir = path.join(base, entry.name, 'src');
    if (!fs.existsSync(srcDir)) continue;
    for (const f of fs.readdirSync(srcDir)) {
      if (f.endsWith('.ts')) files.push(path.join(srcDir, f));
    }
  }
  return files;
}

function allExpectedFiles() {
  return listAllWorkspaceFiles().concat(
    fs.readdirSync(path.join(ROOT, 'app/src')).map((f) => path.join(ROOT, 'app/src', f)),
  );
}

const expected = allExpectedFiles();
const label = process.argv[2] ?? 'run';

const api = new API({ cwd: ROOT });
const configFile = path.join(ROOT, 'app/tsconfig.json');
const parsed = await api.parseConfigFile(configFile);
const compilerOptions = { ...parsed.options, noEmit: false };
const rootFiles = [...new Set([...listAllWorkspaceFiles(), ...parsed.fileNames])];
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
    rootFileCount: rootFiles.length,
    expectedCount: expected.length,
    jsOutputCount: emittedSourceFiles.size,
    missingCount: missing.length,
    missing,
  }),
);
process.exit(0);
