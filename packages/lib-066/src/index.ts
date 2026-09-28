export * from './file-0';
import { Servicelib-0660 } from './file-0';
import { value0 as otherValue } from '@repro/lib-067';

export class Rootlib-066 {
  private readonly inner = new Servicelib-0660();
  run(): number {
    return this.inner.process({ id: 'lib-066', count: otherValue() });
  }
}
