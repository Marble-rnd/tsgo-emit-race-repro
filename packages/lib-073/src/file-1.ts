import { value2 } from './file-2';
export interface Shapelib-0731 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0731 {
  process(input: Shapelib-0731): number {
    return input.count + value1();
  }
}
