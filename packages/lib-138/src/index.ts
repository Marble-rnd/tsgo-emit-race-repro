export * from './file-0';
import { Servicelib-1380 } from './file-0';
import { value0 as otherValue } from '@repro/lib-139';

export class Rootlib-138 {
  private readonly inner = new Servicelib-1380();
  run(): number {
    return this.inner.process({ id: 'lib-138', count: otherValue() });
  }
}
