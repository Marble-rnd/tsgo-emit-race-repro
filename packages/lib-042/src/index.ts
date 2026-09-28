export * from './file-0';
import { Servicelib-0420 } from './file-0';
import { value0 as otherValue } from '@repro/lib-043';

export class Rootlib-042 {
  private readonly inner = new Servicelib-0420();
  run(): number {
    return this.inner.process({ id: 'lib-042', count: otherValue() });
  }
}
