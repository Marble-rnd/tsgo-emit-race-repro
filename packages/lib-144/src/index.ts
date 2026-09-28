export * from './file-0';
import { Servicelib-1440 } from './file-0';
import { value0 as otherValue } from '@repro/lib-145';

export class Rootlib-144 {
  private readonly inner = new Servicelib-1440();
  run(): number {
    return this.inner.process({ id: 'lib-144', count: otherValue() });
  }
}
