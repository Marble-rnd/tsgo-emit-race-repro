import { value2 } from './file-2';
export interface Shapelib-1161 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-1161 {
  process(input: Shapelib-1161): number {
    return input.count + value1();
  }
}
