export * from './file-0';
import { Servicelib-0370 } from './file-0';
import { value0 as otherValue } from '@repro/lib-038';

export class Rootlib-037 {
  private readonly inner = new Servicelib-0370();
  run(): number {
    return this.inner.process({ id: 'lib-037', count: otherValue() });
  }
}
