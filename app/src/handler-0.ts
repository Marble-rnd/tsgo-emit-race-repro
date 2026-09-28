import { Rootlib-000 } from '@repro/lib-000';
import { Rootlib-003 } from '@repro/lib-003';
import { Rootlib-005 } from '@repro/lib-005';

export function handler0(): number {
  return new Rootlib-000().run() + new Rootlib-003().run() + new Rootlib-005().run();
}
