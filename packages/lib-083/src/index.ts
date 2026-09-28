export * from './file-0';
import { Servicelib-0830 } from './file-0';
import { value0 as otherValue } from '@repro/lib-084';

export class Rootlib-083 {
  private readonly inner = new Servicelib-0830();
  run(): number {
    return this.inner.process({ id: 'lib-083', count: otherValue() });
  }
}
