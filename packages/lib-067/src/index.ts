export * from './file-0';
import { Servicelib-0670 } from './file-0';
import { value0 as otherValue } from '@repro/lib-068';

export class Rootlib-067 {
  private readonly inner = new Servicelib-0670();
  run(): number {
    return this.inner.process({ id: 'lib-067', count: otherValue() });
  }
}
