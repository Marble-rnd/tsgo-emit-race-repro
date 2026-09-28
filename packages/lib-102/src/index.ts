export * from './file-0';
import { Servicelib-1020 } from './file-0';
import { value0 as otherValue } from '@repro/lib-103';

export class Rootlib-102 {
  private readonly inner = new Servicelib-1020();
  run(): number {
    return this.inner.process({ id: 'lib-102', count: otherValue() });
  }
}
