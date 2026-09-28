export * from './file-0';
import { Servicelib-1210 } from './file-0';
import { value0 as otherValue } from '@repro/lib-122';

export class Rootlib-121 {
  private readonly inner = new Servicelib-1210();
  run(): number {
    return this.inner.process({ id: 'lib-121', count: otherValue() });
  }
}
