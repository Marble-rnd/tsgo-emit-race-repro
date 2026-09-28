import { value6 } from './file-6';
export interface Shapelib-1085 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-1085 {
  process(input: Shapelib-1085): number {
    return input.count + value5();
  }
}
