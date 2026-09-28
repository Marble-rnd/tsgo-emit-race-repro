export * from './file-0';
import { Servicelib-1390 } from './file-0';
import { value0 as otherValue } from '@repro/lib-140';

export class Rootlib-139 {
  private readonly inner = new Servicelib-1390();
  run(): number {
    return this.inner.process({ id: 'lib-139', count: otherValue() });
  }
}
