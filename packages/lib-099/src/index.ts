export * from './file-0';
import { Servicelib-0990 } from './file-0';
import { value0 as otherValue } from '@repro/lib-100';

export class Rootlib-099 {
  private readonly inner = new Servicelib-0990();
  run(): number {
    return this.inner.process({ id: 'lib-099', count: otherValue() });
  }
}
