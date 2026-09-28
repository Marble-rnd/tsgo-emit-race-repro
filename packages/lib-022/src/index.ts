export * from './file-0';
import { Servicelib-0220 } from './file-0';
import { value0 as otherValue } from '@repro/lib-023';

export class Rootlib-022 {
  private readonly inner = new Servicelib-0220();
  run(): number {
    return this.inner.process({ id: 'lib-022', count: otherValue() });
  }
}
