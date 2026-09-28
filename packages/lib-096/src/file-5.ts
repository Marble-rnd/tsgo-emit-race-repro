import { value6 } from './file-6';
export interface Shapelib-0965 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-0965 {
  process(input: Shapelib-0965): number {
    return input.count + value5();
  }
}
