import { value2 } from './file-2';
export interface Shapelib-0351 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0351 {
  process(input: Shapelib-0351): number {
    return input.count + value1();
  }
}
