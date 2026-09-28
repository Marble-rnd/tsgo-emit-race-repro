import { value2 } from './file-2';
export interface Shapelib-1001 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-1001 {
  process(input: Shapelib-1001): number {
    return input.count + value1();
  }
}
