import { value2 } from './file-2';
export interface Shapelib-0861 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0861 {
  process(input: Shapelib-0861): number {
    return input.count + value1();
  }
}
