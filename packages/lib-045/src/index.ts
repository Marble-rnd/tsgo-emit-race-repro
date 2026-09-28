export * from './file-0';
import { Servicelib-0450 } from './file-0';
import { value0 as otherValue } from '@repro/lib-046';

export class Rootlib-045 {
  private readonly inner = new Servicelib-0450();
  run(): number {
    return this.inner.process({ id: 'lib-045', count: otherValue() });
  }
}
