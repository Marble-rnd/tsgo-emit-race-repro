export * from './file-0';
import { Servicelib-1200 } from './file-0';
import { value0 as otherValue } from '@repro/lib-121';

export class Rootlib-120 {
  private readonly inner = new Servicelib-1200();
  run(): number {
    return this.inner.process({ id: 'lib-120', count: otherValue() });
  }
}
