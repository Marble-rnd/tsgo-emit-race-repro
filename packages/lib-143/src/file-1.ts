import { value2 } from './file-2';
export interface Shapelib-1431 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-1431 {
  process(input: Shapelib-1431): number {
    return input.count + value1();
  }
}
