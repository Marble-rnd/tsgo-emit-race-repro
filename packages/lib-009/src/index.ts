export * from './file-0';
import { Servicelib-0090 } from './file-0';
import { value0 as otherValue } from '@repro/lib-010';

export class Rootlib-009 {
  private readonly inner = new Servicelib-0090();
  run(): number {
    return this.inner.process({ id: 'lib-009', count: otherValue() });
  }
}
