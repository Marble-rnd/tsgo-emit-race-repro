export * from './file-0';
import { Servicelib-1400 } from './file-0';
import { value0 as otherValue } from '@repro/lib-141';

export class Rootlib-140 {
  private readonly inner = new Servicelib-1400();
  run(): number {
    return this.inner.process({ id: 'lib-140', count: otherValue() });
  }
}
