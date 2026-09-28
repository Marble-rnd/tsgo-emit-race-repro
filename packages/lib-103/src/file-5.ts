import { value6 } from './file-6';
export interface Shapelib-1035 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-1035 {
  process(input: Shapelib-1035): number {
    return input.count + value5();
  }
}
