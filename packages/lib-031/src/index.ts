export * from './file-0';
import { Servicelib-0310 } from './file-0';
import { value0 as otherValue } from '@repro/lib-032';

export class Rootlib-031 {
  private readonly inner = new Servicelib-0310();
  run(): number {
    return this.inner.process({ id: 'lib-031', count: otherValue() });
  }
}
