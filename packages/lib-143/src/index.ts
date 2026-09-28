export * from './file-0';
import { Servicelib-1430 } from './file-0';
import { value0 as otherValue } from '@repro/lib-144';

export class Rootlib-143 {
  private readonly inner = new Servicelib-1430();
  run(): number {
    return this.inner.process({ id: 'lib-143', count: otherValue() });
  }
}
