export * from './file-0';
import { Servicelib-0070 } from './file-0';
import { value0 as otherValue } from '@repro/lib-008';

export class Rootlib-007 {
  private readonly inner = new Servicelib-0070();
  run(): number {
    return this.inner.process({ id: 'lib-007', count: otherValue() });
  }
}
