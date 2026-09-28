import { Rootlib-002 } from '@repro/lib-002';
import { Rootlib-017 } from '@repro/lib-017';
import { Rootlib-031 } from '@repro/lib-031';

export function handler2(): number {
  return new Rootlib-002().run() + new Rootlib-017().run() + new Rootlib-031().run();
}
