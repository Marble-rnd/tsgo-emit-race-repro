import { value6 } from './file-6';
export interface Shapelib-0375 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-0375 {
  process(input: Shapelib-0375): number {
    return input.count + value5();
  }
}
