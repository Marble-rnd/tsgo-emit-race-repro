import { value2 } from './file-2';
export interface Shapelib-0901 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0901 {
  process(input: Shapelib-0901): number {
    return input.count + value1();
  }
}
