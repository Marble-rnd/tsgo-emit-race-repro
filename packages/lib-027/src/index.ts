export * from './file-0';
import { Servicelib-0270 } from './file-0';
import { value0 as otherValue } from '@repro/lib-028';

export class Rootlib-027 {
  private readonly inner = new Servicelib-0270();
  run(): number {
    return this.inner.process({ id: 'lib-027', count: otherValue() });
  }
}
