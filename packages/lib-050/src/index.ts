export * from './file-0';
import { Servicelib-0500 } from './file-0';
import { value0 as otherValue } from '@repro/lib-051';

export class Rootlib-050 {
  private readonly inner = new Servicelib-0500();
  run(): number {
    return this.inner.process({ id: 'lib-050', count: otherValue() });
  }
}
