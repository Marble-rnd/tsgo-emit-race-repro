import { Rootlib-036 } from '@repro/lib-036';
import { Rootlib-105 } from '@repro/lib-105';
import { Rootlib-023 } from '@repro/lib-023';

export function handler36(): number {
  return new Rootlib-036().run() + new Rootlib-105().run() + new Rootlib-023().run();
}
