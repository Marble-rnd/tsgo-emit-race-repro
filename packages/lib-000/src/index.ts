export * from './file-0';
import { Servicelib-0000 } from './file-0';
import { value0 as otherValue } from '@repro/lib-001';

export class Rootlib-000 {
  private readonly inner = new Servicelib-0000();
  run(): number {
    return this.inner.process({ id: 'lib-000', count: otherValue() });
  }
}
