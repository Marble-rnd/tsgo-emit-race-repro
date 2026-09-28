export * from './file-0';
import { Servicelib-1270 } from './file-0';
import { value0 as otherValue } from '@repro/lib-128';

export class Rootlib-127 {
  private readonly inner = new Servicelib-1270();
  run(): number {
    return this.inner.process({ id: 'lib-127', count: otherValue() });
  }
}
