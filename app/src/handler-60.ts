import { Rootlib-060 } from '@repro/lib-060';
import { Rootlib-123 } from '@repro/lib-123';
import { Rootlib-035 } from '@repro/lib-035';

export function handler60(): number {
  return new Rootlib-060().run() + new Rootlib-123().run() + new Rootlib-035().run();
}
