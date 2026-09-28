import { value2 } from './file-2';
export interface Shapelib-0891 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0891 {
  process(input: Shapelib-0891): number {
    return input.count + value1();
  }
}
