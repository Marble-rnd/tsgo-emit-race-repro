export * from './file-0';
import { Servicelib-0590 } from './file-0';
import { value0 as otherValue } from '@repro/lib-060';

export class Rootlib-059 {
  private readonly inner = new Servicelib-0590();
  run(): number {
    return this.inner.process({ id: 'lib-059', count: otherValue() });
  }
}
