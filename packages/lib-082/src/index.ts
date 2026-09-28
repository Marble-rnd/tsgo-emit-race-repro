export * from './file-0';
import { Servicelib-0820 } from './file-0';
import { value0 as otherValue } from '@repro/lib-083';

export class Rootlib-082 {
  private readonly inner = new Servicelib-0820();
  run(): number {
    return this.inner.process({ id: 'lib-082', count: otherValue() });
  }
}
