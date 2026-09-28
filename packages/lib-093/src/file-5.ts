import { value6 } from './file-6';
export interface Shapelib-0935 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-0935 {
  process(input: Shapelib-0935): number {
    return input.count + value5();
  }
}
