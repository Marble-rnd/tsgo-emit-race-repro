export * from './file-0';
import { Servicelib-1190 } from './file-0';
import { value0 as otherValue } from '@repro/lib-120';

export class Rootlib-119 {
  private readonly inner = new Servicelib-1190();
  run(): number {
    return this.inner.process({ id: 'lib-119', count: otherValue() });
  }
}
