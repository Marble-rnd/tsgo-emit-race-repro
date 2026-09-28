export * from './file-0';
import { Servicelib-0230 } from './file-0';
import { value0 as otherValue } from '@repro/lib-024';

export class Rootlib-023 {
  private readonly inner = new Servicelib-0230();
  run(): number {
    return this.inner.process({ id: 'lib-023', count: otherValue() });
  }
}
