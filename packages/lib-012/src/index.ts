export * from './file-0';
import { Servicelib-0120 } from './file-0';
import { value0 as otherValue } from '@repro/lib-013';

export class Rootlib-012 {
  private readonly inner = new Servicelib-0120();
  run(): number {
    return this.inner.process({ id: 'lib-012', count: otherValue() });
  }
}
