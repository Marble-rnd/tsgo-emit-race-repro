export * from './file-0';
import { Servicelib-0470 } from './file-0';
import { value0 as otherValue } from '@repro/lib-048';

export class Rootlib-047 {
  private readonly inner = new Servicelib-0470();
  run(): number {
    return this.inner.process({ id: 'lib-047', count: otherValue() });
  }
}
