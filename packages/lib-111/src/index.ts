export * from './file-0';
import { Servicelib-1110 } from './file-0';
import { value0 as otherValue } from '@repro/lib-112';

export class Rootlib-111 {
  private readonly inner = new Servicelib-1110();
  run(): number {
    return this.inner.process({ id: 'lib-111', count: otherValue() });
  }
}
