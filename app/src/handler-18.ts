import { Rootlib-018 } from '@repro/lib-018';
import { Rootlib-129 } from '@repro/lib-129';
import { Rootlib-089 } from '@repro/lib-089';

export function handler18(): number {
  return new Rootlib-018().run() + new Rootlib-129().run() + new Rootlib-089().run();
}
