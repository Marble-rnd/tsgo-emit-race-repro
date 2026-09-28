export * from './file-0';
import { Servicelib-1470 } from './file-0';
import { value0 as otherValue } from '@repro/lib-148';

export class Rootlib-147 {
  private readonly inner = new Servicelib-1470();
  run(): number {
    return this.inner.process({ id: 'lib-147', count: otherValue() });
  }
}
