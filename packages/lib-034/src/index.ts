export * from './file-0';
import { Servicelib-0340 } from './file-0';
import { value0 as otherValue } from '@repro/lib-035';

export class Rootlib-034 {
  private readonly inner = new Servicelib-0340();
  run(): number {
    return this.inner.process({ id: 'lib-034', count: otherValue() });
  }
}
