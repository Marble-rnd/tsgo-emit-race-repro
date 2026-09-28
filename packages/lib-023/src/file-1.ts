import { value2 } from './file-2';
export interface Shapelib-0231 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0231 {
  process(input: Shapelib-0231): number {
    return input.count + value1();
  }
}
