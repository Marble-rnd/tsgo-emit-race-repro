export * from './file-0';
import { Servicelib-0630 } from './file-0';
import { value0 as otherValue } from '@repro/lib-064';

export class Rootlib-063 {
  private readonly inner = new Servicelib-0630();
  run(): number {
    return this.inner.process({ id: 'lib-063', count: otherValue() });
  }
}
