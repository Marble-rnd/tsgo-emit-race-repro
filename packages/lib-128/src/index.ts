export * from './file-0';
import { Servicelib-1280 } from './file-0';
import { value0 as otherValue } from '@repro/lib-129';

export class Rootlib-128 {
  private readonly inner = new Servicelib-1280();
  run(): number {
    return this.inner.process({ id: 'lib-128', count: otherValue() });
  }
}
