export * from './file-0';
import { Servicelib-1070 } from './file-0';
import { value0 as otherValue } from '@repro/lib-108';

export class Rootlib-107 {
  private readonly inner = new Servicelib-1070();
  run(): number {
    return this.inner.process({ id: 'lib-107', count: otherValue() });
  }
}
