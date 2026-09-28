import { value2 } from './file-2';
export interface Shapelib-1291 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-1291 {
  process(input: Shapelib-1291): number {
    return input.count + value1();
  }
}
