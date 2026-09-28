export * from './file-0';
import { Servicelib-1260 } from './file-0';
import { value0 as otherValue } from '@repro/lib-127';

export class Rootlib-126 {
  private readonly inner = new Servicelib-1260();
  run(): number {
    return this.inner.process({ id: 'lib-126', count: otherValue() });
  }
}
