export * from './file-0';
import { Servicelib-0010 } from './file-0';
import { value0 as otherValue } from '@repro/lib-002';

export class Rootlib-001 {
  private readonly inner = new Servicelib-0010();
  run(): number {
    return this.inner.process({ id: 'lib-001', count: otherValue() });
  }
}
