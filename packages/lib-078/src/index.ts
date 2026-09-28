export * from './file-0';
import { Servicelib-0780 } from './file-0';
import { value0 as otherValue } from '@repro/lib-079';

export class Rootlib-078 {
  private readonly inner = new Servicelib-0780();
  run(): number {
    return this.inner.process({ id: 'lib-078', count: otherValue() });
  }
}
