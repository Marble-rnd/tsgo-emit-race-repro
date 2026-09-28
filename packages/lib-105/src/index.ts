export * from './file-0';
import { Servicelib-1050 } from './file-0';
import { value0 as otherValue } from '@repro/lib-106';

export class Rootlib-105 {
  private readonly inner = new Servicelib-1050();
  run(): number {
    return this.inner.process({ id: 'lib-105', count: otherValue() });
  }
}
