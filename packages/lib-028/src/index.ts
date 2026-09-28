export * from './file-0';
import { Servicelib-0280 } from './file-0';
import { value0 as otherValue } from '@repro/lib-029';

export class Rootlib-028 {
  private readonly inner = new Servicelib-0280();
  run(): number {
    return this.inner.process({ id: 'lib-028', count: otherValue() });
  }
}
