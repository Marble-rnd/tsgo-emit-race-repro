export * from './file-0';
import { Servicelib-0730 } from './file-0';
import { value0 as otherValue } from '@repro/lib-074';

export class Rootlib-073 {
  private readonly inner = new Servicelib-0730();
  run(): number {
    return this.inner.process({ id: 'lib-073', count: otherValue() });
  }
}
