export * from './file-0';
import { Servicelib-0790 } from './file-0';
import { value0 as otherValue } from '@repro/lib-080';

export class Rootlib-079 {
  private readonly inner = new Servicelib-0790();
  run(): number {
    return this.inner.process({ id: 'lib-079', count: otherValue() });
  }
}
