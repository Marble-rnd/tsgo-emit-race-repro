export * from './file-0';
import { Servicelib-0130 } from './file-0';
import { value0 as otherValue } from '@repro/lib-014';

export class Rootlib-013 {
  private readonly inner = new Servicelib-0130();
  run(): number {
    return this.inner.process({ id: 'lib-013', count: otherValue() });
  }
}
