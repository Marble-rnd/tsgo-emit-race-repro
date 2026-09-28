export * from './file-0';
import { Servicelib-1360 } from './file-0';
import { value0 as otherValue } from '@repro/lib-137';

export class Rootlib-136 {
  private readonly inner = new Servicelib-1360();
  run(): number {
    return this.inner.process({ id: 'lib-136', count: otherValue() });
  }
}
