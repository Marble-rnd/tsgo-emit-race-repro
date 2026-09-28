export * from './file-0';
import { Servicelib-0640 } from './file-0';
import { value0 as otherValue } from '@repro/lib-065';

export class Rootlib-064 {
  private readonly inner = new Servicelib-0640();
  run(): number {
    return this.inner.process({ id: 'lib-064', count: otherValue() });
  }
}
