import { value6 } from './file-6';
export interface Shapelib-0575 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-0575 {
  process(input: Shapelib-0575): number {
    return input.count + value5();
  }
}
