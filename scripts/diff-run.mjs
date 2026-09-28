import { buildOnce } from './build-once.mjs';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(import.meta.dirname, '..');

function allExpectedFiles() {
  const files = [];
  const base = path.join(ROOT, 'packages');
  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const srcDir = path.join(base, entry.name, 'src');
    for (const f of fs.readdirSync(srcDir)) {
      files.push(path.join(srcDir, f));
    }
  }
  const appSrc = path.join(ROOT, 'app', 'src');
  for (const f of fs.readdirSync(appSrc)) {
    files.push(path.join(appSrc, f));
  }
  return files;
}

const expected = allExpectedFiles();
const result = await buildOnce(process.argv[2] ?? 'run');
const seen = new Set(result.jsSourceFiles);
const missing = expected.filter((f) => !seen.has(f)).map((f) => path.relative(ROOT, f));

console.log(
  JSON.stringify({
    label: result.label,
    expectedCount: expected.length,
    jsOutputCount: result.jsOutputCount,
    missingCount: missing.length,
    missing,
  }),
);
process.exit(0);
