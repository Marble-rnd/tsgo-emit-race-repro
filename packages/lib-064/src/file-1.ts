import { value2 } from './file-2';
export interface Shapelib-0641 {
  id: string;
  count: number;
}

export function value1(): number {
  return 1 + value2();
}

export class Servicelib-0641 {
  process(input: Shapelib-0641): number {
    return input.count + value1();
  }
}
