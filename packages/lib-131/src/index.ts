export * from './file-0';
import { Servicelib-1310 } from './file-0';
import { value0 as otherValue } from '@repro/lib-132';

export class Rootlib-131 {
  private readonly inner = new Servicelib-1310();
  run(): number {
    return this.inner.process({ id: 'lib-131', count: otherValue() });
  }
}
