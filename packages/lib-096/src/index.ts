export * from './file-0';
import { Servicelib-0960 } from './file-0';
import { value0 as otherValue } from '@repro/lib-097';

export class Rootlib-096 {
  private readonly inner = new Servicelib-0960();
  run(): number {
    return this.inner.process({ id: 'lib-096', count: otherValue() });
  }
}
