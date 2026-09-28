export * from './file-0';
import { Servicelib-1300 } from './file-0';
import { value0 as otherValue } from '@repro/lib-131';

export class Rootlib-130 {
  private readonly inner = new Servicelib-1300();
  run(): number {
    return this.inner.process({ id: 'lib-130', count: otherValue() });
  }
}
