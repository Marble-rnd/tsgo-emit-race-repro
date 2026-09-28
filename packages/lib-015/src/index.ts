export * from './file-0';
import { Servicelib-0150 } from './file-0';
import { value0 as otherValue } from '@repro/lib-016';

export class Rootlib-015 {
  private readonly inner = new Servicelib-0150();
  run(): number {
    return this.inner.process({ id: 'lib-015', count: otherValue() });
  }
}
