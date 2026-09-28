import { value2 } from './file-2';
export interface Shapelib-0631 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0631 {
  process(input: Shapelib-0631): number {
    return input.count + value1();
  }
}
