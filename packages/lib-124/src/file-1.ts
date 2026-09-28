import { value2 } from './file-2';
export interface Shapelib-1241 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-1241 {
  process(input: Shapelib-1241): number {
    return input.count + value1();
  }
}
