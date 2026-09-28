import { value2 } from './file-2';
export interface Shapelib-1141 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-1141 {
  process(input: Shapelib-1141): number {
    return input.count + value1();
  }
}
