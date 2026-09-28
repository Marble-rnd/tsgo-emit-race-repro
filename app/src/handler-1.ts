import { Rootlib-001 } from '@repro/lib-001';
import { Rootlib-010 } from '@repro/lib-010';
import { Rootlib-018 } from '@repro/lib-018';

export function handler1(): number {
  return new Rootlib-001().run() + new Rootlib-010().run() + new Rootlib-018().run();
}
