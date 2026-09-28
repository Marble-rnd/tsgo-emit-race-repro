export * from './file-0';
import { Servicelib-0050 } from './file-0';
import { value0 as otherValue } from '@repro/lib-006';

export class Rootlib-005 {
  private readonly inner = new Servicelib-0050();
  run(): number {
    return this.inner.process({ id: 'lib-005', count: otherValue() });
  }
}
