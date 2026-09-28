export * from './file-0';
import { Servicelib-0750 } from './file-0';
import { value0 as otherValue } from '@repro/lib-076';

export class Rootlib-075 {
  private readonly inner = new Servicelib-0750();
  run(): number {
    return this.inner.process({ id: 'lib-075', count: otherValue() });
  }
}
