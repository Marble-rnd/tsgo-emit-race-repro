export * from './file-0';
import { Servicelib-1080 } from './file-0';
import { value0 as otherValue } from '@repro/lib-109';

export class Rootlib-108 {
  private readonly inner = new Servicelib-1080();
  run(): number {
    return this.inner.process({ id: 'lib-108', count: otherValue() });
  }
}
