export * from './file-0';
import { Servicelib-0650 } from './file-0';
import { value0 as otherValue } from '@repro/lib-066';

export class Rootlib-065 {
  private readonly inner = new Servicelib-0650();
  run(): number {
    return this.inner.process({ id: 'lib-065', count: otherValue() });
  }
}
