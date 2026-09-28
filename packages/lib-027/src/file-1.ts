import { value2 } from './file-2';
export interface Shapelib-0271 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0271 {
  process(input: Shapelib-0271): number {
    return input.count + value1();
  }
}
