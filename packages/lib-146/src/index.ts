export * from './file-0';
import { Servicelib-1460 } from './file-0';
import { value0 as otherValue } from '@repro/lib-147';

export class Rootlib-146 {
  private readonly inner = new Servicelib-1460();
  run(): number {
    return this.inner.process({ id: 'lib-146', count: otherValue() });
  }
}
