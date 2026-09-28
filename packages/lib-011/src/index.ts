export * from './file-0';
import { Servicelib-0110 } from './file-0';
import { value0 as otherValue } from '@repro/lib-012';

export class Rootlib-011 {
  private readonly inner = new Servicelib-0110();
  run(): number {
    return this.inner.process({ id: 'lib-011', count: otherValue() });
  }
}
