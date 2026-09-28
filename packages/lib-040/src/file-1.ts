import { value2 } from './file-2';
export interface Shapelib-0401 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0401 {
  process(input: Shapelib-0401): number {
    return input.count + value1();
  }
}
