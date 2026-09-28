export * from './file-0';
import { Servicelib-1340 } from './file-0';
import { value0 as otherValue } from '@repro/lib-135';

export class Rootlib-134 {
  private readonly inner = new Servicelib-1340();
  run(): number {
    return this.inner.process({ id: 'lib-134', count: otherValue() });
  }
}
