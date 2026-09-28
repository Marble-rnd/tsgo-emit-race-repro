export * from './file-0';
import { Servicelib-1220 } from './file-0';
import { value0 as otherValue } from '@repro/lib-123';

export class Rootlib-122 {
  private readonly inner = new Servicelib-1220();
  run(): number {
    return this.inner.process({ id: 'lib-122', count: otherValue() });
  }
}
