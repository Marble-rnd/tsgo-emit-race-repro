export * from './file-0';
import { Servicelib-1040 } from './file-0';
import { value0 as otherValue } from '@repro/lib-105';

export class Rootlib-104 {
  private readonly inner = new Servicelib-1040();
  run(): number {
    return this.inner.process({ id: 'lib-104', count: otherValue() });
  }
}
