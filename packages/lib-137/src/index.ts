export * from './file-0';
import { Servicelib-1370 } from './file-0';
import { value0 as otherValue } from '@repro/lib-138';

export class Rootlib-137 {
  private readonly inner = new Servicelib-1370();
  run(): number {
    return this.inner.process({ id: 'lib-137', count: otherValue() });
  }
}
