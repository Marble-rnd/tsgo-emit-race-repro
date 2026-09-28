import { Rootlib-017 } from '@repro/lib-017';
import { Rootlib-122 } from '@repro/lib-122';
import { Rootlib-076 } from '@repro/lib-076';

export function handler17(): number {
  return new Rootlib-017().run() + new Rootlib-122().run() + new Rootlib-076().run();
}
