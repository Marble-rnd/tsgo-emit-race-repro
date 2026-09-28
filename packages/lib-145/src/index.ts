export * from './file-0';
import { Servicelib-1450 } from './file-0';
import { value0 as otherValue } from '@repro/lib-146';

export class Rootlib-145 {
  private readonly inner = new Servicelib-1450();
  run(): number {
    return this.inner.process({ id: 'lib-145', count: otherValue() });
  }
}
