import { value6 } from './file-6';
export interface Shapelib-0945 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-0945 {
  process(input: Shapelib-0945): number {
    return input.count + value5();
  }
}
