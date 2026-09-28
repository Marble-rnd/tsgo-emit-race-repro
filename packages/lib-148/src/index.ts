export * from './file-0';
import { Servicelib-1480 } from './file-0';
import { value0 as otherValue } from '@repro/lib-149';

export class Rootlib-148 {
  private readonly inner = new Servicelib-1480();
  run(): number {
    return this.inner.process({ id: 'lib-148', count: otherValue() });
  }
}
