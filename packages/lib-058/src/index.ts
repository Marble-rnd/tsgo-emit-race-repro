export * from './file-0';
import { Servicelib-0580 } from './file-0';
import { value0 as otherValue } from '@repro/lib-059';

export class Rootlib-058 {
  private readonly inner = new Servicelib-0580();
  run(): number {
    return this.inner.process({ id: 'lib-058', count: otherValue() });
  }
}
