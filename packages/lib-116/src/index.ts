export * from './file-0';
import { Servicelib-1160 } from './file-0';
import { value0 as otherValue } from '@repro/lib-117';

export class Rootlib-116 {
  private readonly inner = new Servicelib-1160();
  run(): number {
    return this.inner.process({ id: 'lib-116', count: otherValue() });
  }
}
