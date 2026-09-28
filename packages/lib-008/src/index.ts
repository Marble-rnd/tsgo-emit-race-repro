export * from './file-0';
import { Servicelib-0080 } from './file-0';
import { value0 as otherValue } from '@repro/lib-009';

export class Rootlib-008 {
  private readonly inner = new Servicelib-0080();
  run(): number {
    return this.inner.process({ id: 'lib-008', count: otherValue() });
  }
}
