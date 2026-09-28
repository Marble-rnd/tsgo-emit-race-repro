export * from './file-0';
import { Servicelib-0460 } from './file-0';
import { value0 as otherValue } from '@repro/lib-047';

export class Rootlib-046 {
  private readonly inner = new Servicelib-0460();
  run(): number {
    return this.inner.process({ id: 'lib-046', count: otherValue() });
  }
}
