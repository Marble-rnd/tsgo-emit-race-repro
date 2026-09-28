export * from './file-0';
import { Servicelib-0350 } from './file-0';
import { value0 as otherValue } from '@repro/lib-036';

export class Rootlib-035 {
  private readonly inner = new Servicelib-0350();
  run(): number {
    return this.inner.process({ id: 'lib-035', count: otherValue() });
  }
}
