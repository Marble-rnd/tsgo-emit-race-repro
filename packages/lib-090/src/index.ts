export * from './file-0';
import { Servicelib-0900 } from './file-0';
import { value0 as otherValue } from '@repro/lib-091';

export class Rootlib-090 {
  private readonly inner = new Servicelib-0900();
  run(): number {
    return this.inner.process({ id: 'lib-090', count: otherValue() });
  }
}
