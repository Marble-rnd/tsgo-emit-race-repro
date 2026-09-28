import { Rootlib-021 } from '@repro/lib-021';
import { Rootlib-000 } from '@repro/lib-000';
import { Rootlib-128 } from '@repro/lib-128';

export function handler21(): number {
  return new Rootlib-021().run() + new Rootlib-000().run() + new Rootlib-128().run();
}
