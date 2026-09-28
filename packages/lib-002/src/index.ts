export * from './file-0';
import { Servicelib-0020 } from './file-0';
import { value0 as otherValue } from '@repro/lib-003';

export class Rootlib-002 {
  private readonly inner = new Servicelib-0020();
  run(): number {
    return this.inner.process({ id: 'lib-002', count: otherValue() });
  }
}
