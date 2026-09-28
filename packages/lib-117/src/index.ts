export * from './file-0';
import { Servicelib-1170 } from './file-0';
import { value0 as otherValue } from '@repro/lib-118';

export class Rootlib-117 {
  private readonly inner = new Servicelib-1170();
  run(): number {
    return this.inner.process({ id: 'lib-117', count: otherValue() });
  }
}
