export * from './file-0';
import { Servicelib-0160 } from './file-0';
import { value0 as otherValue } from '@repro/lib-017';

export class Rootlib-016 {
  private readonly inner = new Servicelib-0160();
  run(): number {
    return this.inner.process({ id: 'lib-016', count: otherValue() });
  }
}
