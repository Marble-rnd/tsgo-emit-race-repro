export * from './file-0';
import { Servicelib-0140 } from './file-0';
import { value0 as otherValue } from '@repro/lib-015';

export class Rootlib-014 {
  private readonly inner = new Servicelib-0140();
  run(): number {
    return this.inner.process({ id: 'lib-014', count: otherValue() });
  }
}
