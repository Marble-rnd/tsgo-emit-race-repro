export * from './file-0';
import { Servicelib-0440 } from './file-0';
import { value0 as otherValue } from '@repro/lib-045';

export class Rootlib-044 {
  private readonly inner = new Servicelib-0440();
  run(): number {
    return this.inner.process({ id: 'lib-044', count: otherValue() });
  }
}
