export * from './file-0';
import { Servicelib-1120 } from './file-0';
import { value0 as otherValue } from '@repro/lib-113';

export class Rootlib-112 {
  private readonly inner = new Servicelib-1120();
  run(): number {
    return this.inner.process({ id: 'lib-112', count: otherValue() });
  }
}
