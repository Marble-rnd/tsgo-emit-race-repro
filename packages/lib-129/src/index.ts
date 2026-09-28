export * from './file-0';
import { Servicelib-1290 } from './file-0';
import { value0 as otherValue } from '@repro/lib-130';

export class Rootlib-129 {
  private readonly inner = new Servicelib-1290();
  run(): number {
    return this.inner.process({ id: 'lib-129', count: otherValue() });
  }
}
