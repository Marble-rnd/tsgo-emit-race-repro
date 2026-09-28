export * from './file-0';
import { Servicelib-0890 } from './file-0';
import { value0 as otherValue } from '@repro/lib-090';

export class Rootlib-089 {
  private readonly inner = new Servicelib-0890();
  run(): number {
    return this.inner.process({ id: 'lib-089', count: otherValue() });
  }
}
