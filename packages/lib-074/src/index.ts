export * from './file-0';
import { Servicelib-0740 } from './file-0';
import { value0 as otherValue } from '@repro/lib-075';

export class Rootlib-074 {
  private readonly inner = new Servicelib-0740();
  run(): number {
    return this.inner.process({ id: 'lib-074', count: otherValue() });
  }
}
