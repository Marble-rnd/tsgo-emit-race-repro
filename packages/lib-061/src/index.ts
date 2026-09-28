export * from './file-0';
import { Servicelib-0610 } from './file-0';
import { value0 as otherValue } from '@repro/lib-062';

export class Rootlib-061 {
  private readonly inner = new Servicelib-0610();
  run(): number {
    return this.inner.process({ id: 'lib-061', count: otherValue() });
  }
}
