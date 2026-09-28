// Spawns `diff-run.mjs` as a fresh child process N times (each a completely independent
// OS process / native-compiler subprocess pair) and reports how often the emit output is
// missing files it should have. No concurrency between trials is needed to see failures —
// this reproduces from the compiler's own internal parallelism within a single, isolated run.
import { spawn } from 'child_process';
import * as path from 'path';

const TRIALS = Number(process.argv[2] ?? 20);
const ROOT = path.resolve(import.meta.dirname, '..');

function runOnce(label) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(ROOT, 'scripts/diff-run.mjs'), label], { cwd: ROOT });
    let out = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.pipe(process.stderr);
    child.on('exit', (code) => {
      if (code !== 0) return reject(new Error(`trial ${label} exited ${code}`));
      resolve(JSON.parse(out.trim().split('\n').pop()));
    });
  });
}

let failures = 0;
const failureDetails = [];
for (let i = 1; i <= TRIALS; i++) {
  const result = await runOnce(`trial-${i}`);
  const ok = result.missingCount === 0;
  console.log(`[${i}/${TRIALS}] jsOutputCount=${result.jsOutputCount}/${result.expectedCount} missing=${result.missingCount} ${ok ? 'OK' : 'INCOMPLETE'}`);
  if (!ok) {
    failures++;
    failureDetails.push(result.missing);
  }
}

console.log(`\n${failures} / ${TRIALS} trials produced incomplete emit output (missing files with emitSkipped: false, no diagnostics).`);
if (failures > 0) {
  console.log('Missing files by failing trial:');
  for (const missing of failureDetails) console.log(' -', missing.join(', '));
}
process.exit(failures > 0 ? 1 : 0);
