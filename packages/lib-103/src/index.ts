export * from './file-0';
import { Servicelib-1030 } from './file-0';
import { value0 as otherValue } from '@repro/lib-104';

export class Rootlib-103 {
  private readonly inner = new Servicelib-1030();
  run(): number {
    return this.inner.process({ id: 'lib-103', count: otherValue() });
  }
}
