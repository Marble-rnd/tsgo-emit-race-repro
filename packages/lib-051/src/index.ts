export * from './file-0';
import { Servicelib-0510 } from './file-0';
import { value0 as otherValue } from '@repro/lib-052';

export class Rootlib-051 {
  private readonly inner = new Servicelib-0510();
  run(): number {
    return this.inner.process({ id: 'lib-051', count: otherValue() });
  }
}
