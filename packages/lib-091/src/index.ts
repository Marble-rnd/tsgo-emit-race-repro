export * from './file-0';
import { Servicelib-0910 } from './file-0';
import { value0 as otherValue } from '@repro/lib-092';

export class Rootlib-091 {
  private readonly inner = new Servicelib-0910();
  run(): number {
    return this.inner.process({ id: 'lib-091', count: otherValue() });
  }
}
