export * from './file-0';
import { Servicelib-0970 } from './file-0';
import { value0 as otherValue } from '@repro/lib-098';

export class Rootlib-097 {
  private readonly inner = new Servicelib-0970();
  run(): number {
    return this.inner.process({ id: 'lib-097', count: otherValue() });
  }
}
