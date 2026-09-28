export * from './file-0';
import { Servicelib-0550 } from './file-0';
import { value0 as otherValue } from '@repro/lib-056';

export class Rootlib-055 {
  private readonly inner = new Servicelib-0550();
  run(): number {
    return this.inner.process({ id: 'lib-055', count: otherValue() });
  }
}
