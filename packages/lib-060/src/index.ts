export * from './file-0';
import { Servicelib-0600 } from './file-0';
import { value0 as otherValue } from '@repro/lib-061';

export class Rootlib-060 {
  private readonly inner = new Servicelib-0600();
  run(): number {
    return this.inner.process({ id: 'lib-060', count: otherValue() });
  }
}
