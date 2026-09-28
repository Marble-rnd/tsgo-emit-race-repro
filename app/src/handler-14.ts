import { Rootlib-014 } from '@repro/lib-014';
import { Rootlib-101 } from '@repro/lib-101';
import { Rootlib-037 } from '@repro/lib-037';

export function handler14(): number {
  return new Rootlib-014().run() + new Rootlib-101().run() + new Rootlib-037().run();
}
