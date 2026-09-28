export * from './file-0';
import { Servicelib-1130 } from './file-0';
import { value0 as otherValue } from '@repro/lib-114';

export class Rootlib-113 {
  private readonly inner = new Servicelib-1130();
  run(): number {
    return this.inner.process({ id: 'lib-113', count: otherValue() });
  }
}
