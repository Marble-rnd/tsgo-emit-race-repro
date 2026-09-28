export * from './file-0';
import { Servicelib-1350 } from './file-0';
import { value0 as otherValue } from '@repro/lib-136';

export class Rootlib-135 {
  private readonly inner = new Servicelib-1350();
  run(): number {
    return this.inner.process({ id: 'lib-135', count: otherValue() });
  }
}
