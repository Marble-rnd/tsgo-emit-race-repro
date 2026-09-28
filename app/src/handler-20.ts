import { Rootlib-020 } from '@repro/lib-020';
import { Rootlib-143 } from '@repro/lib-143';
import { Rootlib-115 } from '@repro/lib-115';

export function handler20(): number {
  return new Rootlib-020().run() + new Rootlib-143().run() + new Rootlib-115().run();
}
