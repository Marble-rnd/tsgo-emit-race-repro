export * from './file-0';
import { Servicelib-0920 } from './file-0';
import { value0 as otherValue } from '@repro/lib-093';

export class Rootlib-092 {
  private readonly inner = new Servicelib-0920();
  run(): number {
    return this.inner.process({ id: 'lib-092', count: otherValue() });
  }
}
