export * from './file-0';
import { Servicelib-0560 } from './file-0';
import { value0 as otherValue } from '@repro/lib-057';

export class Rootlib-056 {
  private readonly inner = new Servicelib-0560();
  run(): number {
    return this.inner.process({ id: 'lib-056', count: otherValue() });
  }
}
