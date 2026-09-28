import { Rootlib-005 } from '@repro/lib-005';
import { Rootlib-038 } from '@repro/lib-038';
import { Rootlib-070 } from '@repro/lib-070';

export function handler5(): number {
  return new Rootlib-005().run() + new Rootlib-038().run() + new Rootlib-070().run();
}
