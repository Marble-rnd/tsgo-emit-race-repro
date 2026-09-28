export * from './file-0';
import { Servicelib-0980 } from './file-0';
import { value0 as otherValue } from '@repro/lib-099';

export class Rootlib-098 {
  private readonly inner = new Servicelib-0980();
  run(): number {
    return this.inner.process({ id: 'lib-098', count: otherValue() });
  }
}
