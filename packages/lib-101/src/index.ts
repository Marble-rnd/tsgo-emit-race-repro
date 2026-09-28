export * from './file-0';
import { Servicelib-1010 } from './file-0';
import { value0 as otherValue } from '@repro/lib-102';

export class Rootlib-101 {
  private readonly inner = new Servicelib-1010();
  run(): number {
    return this.inner.process({ id: 'lib-101', count: otherValue() });
  }
}
