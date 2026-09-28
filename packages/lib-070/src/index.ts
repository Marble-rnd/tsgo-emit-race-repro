export * from './file-0';
import { Servicelib-0700 } from './file-0';
import { value0 as otherValue } from '@repro/lib-071';

export class Rootlib-070 {
  private readonly inner = new Servicelib-0700();
  run(): number {
    return this.inner.process({ id: 'lib-070', count: otherValue() });
  }
}
