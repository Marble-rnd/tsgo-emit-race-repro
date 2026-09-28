export * from './file-0';
import { Servicelib-0870 } from './file-0';
import { value0 as otherValue } from '@repro/lib-088';

export class Rootlib-087 {
  private readonly inner = new Servicelib-0870();
  run(): number {
    return this.inner.process({ id: 'lib-087', count: otherValue() });
  }
}
