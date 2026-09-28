import { Rootlib-012 } from '@repro/lib-012';
import { Rootlib-087 } from '@repro/lib-087';
import { Rootlib-011 } from '@repro/lib-011';

export function handler12(): number {
  return new Rootlib-012().run() + new Rootlib-087().run() + new Rootlib-011().run();
}
