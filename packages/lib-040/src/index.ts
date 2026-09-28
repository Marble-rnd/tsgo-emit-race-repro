export * from './file-0';
import { Servicelib-0400 } from './file-0';
import { value0 as otherValue } from '@repro/lib-041';

export class Rootlib-040 {
  private readonly inner = new Servicelib-0400();
  run(): number {
    return this.inner.process({ id: 'lib-040', count: otherValue() });
  }
}
