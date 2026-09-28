export * from './file-0';
import { Servicelib-0320 } from './file-0';
import { value0 as otherValue } from '@repro/lib-033';

export class Rootlib-032 {
  private readonly inner = new Servicelib-0320();
  run(): number {
    return this.inner.process({ id: 'lib-032', count: otherValue() });
  }
}
