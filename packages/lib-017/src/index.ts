export * from './file-0';
import { Servicelib-0170 } from './file-0';
import { value0 as otherValue } from '@repro/lib-018';

export class Rootlib-017 {
  private readonly inner = new Servicelib-0170();
  run(): number {
    return this.inner.process({ id: 'lib-017', count: otherValue() });
  }
}
