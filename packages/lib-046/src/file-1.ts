import { value2 } from './file-2';
export interface Shapelib-0461 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0461 {
  process(input: Shapelib-0461): number {
    return input.count + value1();
  }
}
