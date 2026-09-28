import { value2 } from './file-2';
export interface Shapelib-0011 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0011 {
  process(input: Shapelib-0011): number {
    return input.count + value1();
  }
}
