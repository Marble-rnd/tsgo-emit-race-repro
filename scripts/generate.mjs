// Generates a synthetic monorepo shaped like the real one where we found this bug:
// N small "workspace" packages (yarn-workspace-linked, so cross-package imports resolve
// through node_modules symlinks), each with a handful of internal files and 1-2 imports
// of other packages to create real transitive resolution work, plus an "app" package
// whose own files import many of the libs directly. Scale is chosen to roughly match
// the real repro (~220 explicit root files reaching ~1400+ total resolved files).
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');
const LIB_COUNT = 150;
const FILES_PER_LIB = 8;
const APP_FILE_COUNT = 70;

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

for (let i = 0; i < LIB_COUNT; i++) {
  const name = `lib-${String(i).padStart(3, '0')}`;
  const pkgDir = path.join(ROOT, 'packages', name);
  write(
    path.join(pkgDir, 'package.json'),
    JSON.stringify({ name: `@repro/${name}`, version: '1.0.0', main: './src/index.ts' }, null, 2),
  );

  // A couple of internal files per lib, chained by import so there's real per-lib depth.
  for (let f = 0; f < FILES_PER_LIB; f++) {
    const hasNext = f + 1 < FILES_PER_LIB;
    const nextImport = hasNext ? `import { value${f + 1} } from './file-${f + 1}';\n` : '';
    const nextCall = hasNext ? ` + value${f + 1}()` : '';
    write(
      path.join(pkgDir, 'src', `file-${f}.ts`),
      `${nextImport}export interface Shape${name}${f} {\n  id: string;\n  count: number;\n}\n\nexport function value${f}(): number {\n  return ${f}${nextCall};\n}\n\nexport class Service${name}${f} {\n  process(input: Shape${name}${f}): number {\n    return input.count + value${f}();\n  }\n}\n`,
    );
  }

  // Cross-lib import: each lib depends on the next one (mod LIB_COUNT), forming a long
  // dependency chain that stresses transitive resolution the same way the real
  // workspace-lib closure does.
  const otherLib = `lib-${String((i + 1) % LIB_COUNT).padStart(3, '0')}`;
  write(
    path.join(pkgDir, 'src', 'index.ts'),
    `export * from './file-0';\nimport { Service${name}0 } from './file-0';\nimport { value0 as otherValue } from '@repro/${otherLib}';\n\nexport class Root${name} {\n  private readonly inner = new Service${name}0();\n  run(): number {\n    return this.inner.process({ id: '${name}', count: otherValue() });\n  }\n}\n`,
  );
}

for (let a = 0; a < APP_FILE_COUNT; a++) {
  // Each app file imports a handful of libs directly, mirroring real controller/service
  // files that pull in several workspace libs each.
  const libIndices = [a % LIB_COUNT, (a * 7 + 3) % LIB_COUNT, (a * 13 + 5) % LIB_COUNT];
  const uniqueLibs = [...new Set(libIndices)];
  const imports = uniqueLibs
    .map((idx) => {
      const name = `lib-${String(idx).padStart(3, '0')}`;
      return `import { Root${name} } from '@repro/${name}';`;
    })
    .join('\n');
  const uses = uniqueLibs
    .map((idx) => {
      const name = `lib-${String(idx).padStart(3, '0')}`;
      return `new Root${name}().run()`;
    })
    .join(' + ');
  write(
    path.join(ROOT, 'app', 'src', `handler-${a}.ts`),
    `${imports}\n\nexport function handler${a}(): number {\n  return ${uses};\n}\n`,
  );
}

const appDeps = {};
for (let i = 0; i < LIB_COUNT; i++) {
  appDeps[`@repro/lib-${String(i).padStart(3, '0')}`] = '1.0.0';
}
write(
  path.join(ROOT, 'app', 'package.json'),
  JSON.stringify({ name: '@repro/app', version: '1.0.0', private: true, dependencies: appDeps }, null, 2),
);

console.log(`Generated ${LIB_COUNT} libs (${FILES_PER_LIB} files each) + ${APP_FILE_COUNT} app files.`);
