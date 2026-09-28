import { value2 } from './file-2';
export interface Shapelib-1171 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-1171 {
  process(input: Shapelib-1171): number {
    return input.count + value1();
  }
}
