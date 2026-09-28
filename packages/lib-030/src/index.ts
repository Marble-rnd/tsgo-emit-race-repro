export * from './file-0';
import { Servicelib-0300 } from './file-0';
import { value0 as otherValue } from '@repro/lib-031';

export class Rootlib-030 {
  private readonly inner = new Servicelib-0300();
  run(): number {
    return this.inner.process({ id: 'lib-030', count: otherValue() });
  }
}
