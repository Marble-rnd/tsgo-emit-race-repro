export * from './file-0';
import { Servicelib-1420 } from './file-0';
import { value0 as otherValue } from '@repro/lib-143';

export class Rootlib-142 {
  private readonly inner = new Servicelib-1420();
  run(): number {
    return this.inner.process({ id: 'lib-142', count: otherValue() });
  }
}
