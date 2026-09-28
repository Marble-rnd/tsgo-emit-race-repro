export * from './file-0';
import { Servicelib-0570 } from './file-0';
import { value0 as otherValue } from '@repro/lib-058';

export class Rootlib-057 {
  private readonly inner = new Servicelib-0570();
  run(): number {
    return this.inner.process({ id: 'lib-057', count: otherValue() });
  }
}
