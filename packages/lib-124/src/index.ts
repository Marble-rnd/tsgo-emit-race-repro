export * from './file-0';
import { Servicelib-1240 } from './file-0';
import { value0 as otherValue } from '@repro/lib-125';

export class Rootlib-124 {
  private readonly inner = new Servicelib-1240();
  run(): number {
    return this.inner.process({ id: 'lib-124', count: otherValue() });
  }
}
