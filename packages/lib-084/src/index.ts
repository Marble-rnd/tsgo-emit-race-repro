export * from './file-0';
import { Servicelib-0840 } from './file-0';
import { value0 as otherValue } from '@repro/lib-085';

export class Rootlib-084 {
  private readonly inner = new Servicelib-0840();
  run(): number {
    return this.inner.process({ id: 'lib-084', count: otherValue() });
  }
}
