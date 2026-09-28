export * from './file-0';
import { Servicelib-0850 } from './file-0';
import { value0 as otherValue } from '@repro/lib-086';

export class Rootlib-085 {
  private readonly inner = new Servicelib-0850();
  run(): number {
    return this.inner.process({ id: 'lib-085', count: otherValue() });
  }
}
