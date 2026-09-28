export * from './file-0';
import { Servicelib-0030 } from './file-0';
import { value0 as otherValue } from '@repro/lib-004';

export class Rootlib-003 {
  private readonly inner = new Servicelib-0030();
  run(): number {
    return this.inner.process({ id: 'lib-003', count: otherValue() });
  }
}
