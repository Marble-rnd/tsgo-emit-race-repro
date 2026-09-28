import { Rootlib-025 } from '@repro/lib-025';
import { Rootlib-028 } from '@repro/lib-028';
import { Rootlib-030 } from '@repro/lib-030';

export function handler25(): number {
  return new Rootlib-025().run() + new Rootlib-028().run() + new Rootlib-030().run();
}
