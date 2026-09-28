export * from './file-0';
import { Servicelib-0200 } from './file-0';
import { value0 as otherValue } from '@repro/lib-021';

export class Rootlib-020 {
  private readonly inner = new Servicelib-0200();
  run(): number {
    return this.inner.process({ id: 'lib-020', count: otherValue() });
  }
}
