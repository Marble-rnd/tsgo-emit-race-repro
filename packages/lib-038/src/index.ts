export * from './file-0';
import { Servicelib-0380 } from './file-0';
import { value0 as otherValue } from '@repro/lib-039';

export class Rootlib-038 {
  private readonly inner = new Servicelib-0380();
  run(): number {
    return this.inner.process({ id: 'lib-038', count: otherValue() });
  }
}
