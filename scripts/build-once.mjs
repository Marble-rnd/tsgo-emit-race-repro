// Mirrors the real-world usage pattern where we found this bug: build a native `Program`
// with every workspace package's own entry file passed as an explicit root (so cross-package
// imports resolved through node_modules symlinks aren't misclassified as "external library"
// and skipped during emit — a separate, already-understood, unrelated behavior), plus the
// app's own files, then run one whole-program `emitToString(EmitOnly.OnlyJs)` call and report
// how many `.js` outputs came back.
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

export async function buildOnce(label) {
  const api = new API({ cwd: ROOT });
  const configFile = path.join(ROOT, 'app/tsconfig.json');
  const parsed = await api.parseConfigFile(configFile);
  const compilerOptions = { ...parsed.options, noEmit: false };
  const rootFiles = [...new Set([...listWorkspaceEntryFiles(), ...parsed.fileNames])];
  const program = await api.createProgram(rootFiles, compilerOptions, { configFileParsingDiagnostics: parsed.errors });

  const emitOutput = await program.emitToString(EmitOnly.OnlyJs);
  const jsSourceFiles = [...emitOutput.outputFiles.entries()]
    .filter(([outPath]) => outPath.endsWith('.js'))
    .map(([, output]) => output.sourceFileName)
    .filter(Boolean);

  await program.dispose();
  await api.close();

  return {
    label,
    rootFileCount: rootFiles.length,
    jsOutputCount: jsSourceFiles.length,
    emitSkipped: emitOutput.emitSkipped,
    jsSourceFiles,
  };
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const result = await buildOnce(process.argv[2] ?? 'run');
  console.log(JSON.stringify({ ...result, jsSourceFiles: undefined }));
  process.exit(0);
}
