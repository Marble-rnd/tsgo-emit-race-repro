export * from './file-0';
import { Servicelib-0760 } from './file-0';
import { value0 as otherValue } from '@repro/lib-077';

export class Rootlib-076 {
  private readonly inner = new Servicelib-0760();
  run(): number {
    return this.inner.process({ id: 'lib-076', count: otherValue() });
  }
}
