export * from './file-0';
import { Servicelib-0690 } from './file-0';
import { value0 as otherValue } from '@repro/lib-070';

export class Rootlib-069 {
  private readonly inner = new Servicelib-0690();
  run(): number {
    return this.inner.process({ id: 'lib-069', count: otherValue() });
  }
}
