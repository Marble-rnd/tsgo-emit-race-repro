export * from './file-0';
import { Servicelib-1410 } from './file-0';
import { value0 as otherValue } from '@repro/lib-142';

export class Rootlib-141 {
  private readonly inner = new Servicelib-1410();
  run(): number {
    return this.inner.process({ id: 'lib-141', count: otherValue() });
  }
}
