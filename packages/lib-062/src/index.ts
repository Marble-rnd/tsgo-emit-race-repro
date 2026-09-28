export * from './file-0';
import { Servicelib-0620 } from './file-0';
import { value0 as otherValue } from '@repro/lib-063';

export class Rootlib-062 {
  private readonly inner = new Servicelib-0620();
  run(): number {
    return this.inner.process({ id: 'lib-062', count: otherValue() });
  }
}
