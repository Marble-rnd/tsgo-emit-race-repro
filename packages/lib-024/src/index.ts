export * from './file-0';
import { Servicelib-0240 } from './file-0';
import { value0 as otherValue } from '@repro/lib-025';

export class Rootlib-024 {
  private readonly inner = new Servicelib-0240();
  run(): number {
    return this.inner.process({ id: 'lib-024', count: otherValue() });
  }
}
