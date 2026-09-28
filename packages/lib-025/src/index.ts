export * from './file-0';
import { Servicelib-0250 } from './file-0';
import { value0 as otherValue } from '@repro/lib-026';

export class Rootlib-025 {
  private readonly inner = new Servicelib-0250();
  run(): number {
    return this.inner.process({ id: 'lib-025', count: otherValue() });
  }
}
