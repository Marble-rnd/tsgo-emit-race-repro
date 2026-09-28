export * from './file-0';
import { Servicelib-0390 } from './file-0';
import { value0 as otherValue } from '@repro/lib-040';

export class Rootlib-039 {
  private readonly inner = new Servicelib-0390();
  run(): number {
    return this.inner.process({ id: 'lib-039', count: otherValue() });
  }
}
