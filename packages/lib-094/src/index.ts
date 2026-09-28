export * from './file-0';
import { Servicelib-0940 } from './file-0';
import { value0 as otherValue } from '@repro/lib-095';

export class Rootlib-094 {
  private readonly inner = new Servicelib-0940();
  run(): number {
    return this.inner.process({ id: 'lib-094', count: otherValue() });
  }
}
