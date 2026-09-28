export * from './file-0';
import { Servicelib-0100 } from './file-0';
import { value0 as otherValue } from '@repro/lib-011';

export class Rootlib-010 {
  private readonly inner = new Servicelib-0100();
  run(): number {
    return this.inner.process({ id: 'lib-010', count: otherValue() });
  }
}
