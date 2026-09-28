export * from './file-0';
import { Servicelib-1490 } from './file-0';
import { value0 as otherValue } from '@repro/lib-000';

export class Rootlib-149 {
  private readonly inner = new Servicelib-1490();
  run(): number {
    return this.inner.process({ id: 'lib-149', count: otherValue() });
  }
}
