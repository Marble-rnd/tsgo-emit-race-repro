export * from './file-0';
import { Servicelib-0360 } from './file-0';
import { value0 as otherValue } from '@repro/lib-037';

export class Rootlib-036 {
  private readonly inner = new Servicelib-0360();
  run(): number {
    return this.inner.process({ id: 'lib-036', count: otherValue() });
  }
}
