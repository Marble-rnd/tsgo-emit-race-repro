import { Rootlib-013 } from '@repro/lib-013';
import { Rootlib-094 } from '@repro/lib-094';
import { Rootlib-024 } from '@repro/lib-024';

export function handler13(): number {
  return new Rootlib-013().run() + new Rootlib-094().run() + new Rootlib-024().run();
}
