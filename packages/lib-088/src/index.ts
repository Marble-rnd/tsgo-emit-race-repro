export * from './file-0';
import { Servicelib-0880 } from './file-0';
import { value0 as otherValue } from '@repro/lib-089';

export class Rootlib-088 {
  private readonly inner = new Servicelib-0880();
  run(): number {
    return this.inner.process({ id: 'lib-088', count: otherValue() });
  }
}
