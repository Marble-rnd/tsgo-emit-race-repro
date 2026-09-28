export * from './file-0';
import { Servicelib-0710 } from './file-0';
import { value0 as otherValue } from '@repro/lib-072';

export class Rootlib-071 {
  private readonly inner = new Servicelib-0710();
  run(): number {
    return this.inner.process({ id: 'lib-071', count: otherValue() });
  }
}
