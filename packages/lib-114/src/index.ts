export * from './file-0';
import { Servicelib-1140 } from './file-0';
import { value0 as otherValue } from '@repro/lib-115';

export class Rootlib-114 {
  private readonly inner = new Servicelib-1140();
  run(): number {
    return this.inner.process({ id: 'lib-114', count: otherValue() });
  }
}
