export * from './file-0';
import { Servicelib-0810 } from './file-0';
import { value0 as otherValue } from '@repro/lib-082';

export class Rootlib-081 {
  private readonly inner = new Servicelib-0810();
  run(): number {
    return this.inner.process({ id: 'lib-081', count: otherValue() });
  }
}
