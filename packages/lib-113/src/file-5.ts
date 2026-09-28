import { value6 } from './file-6';
export interface Shapelib-1135 {
  id: string;
  count: number;
}

export function value5(): number {
  return 5 + value6();
}

export class Servicelib-1135 {
  process(input: Shapelib-1135): number {
    return input.count + value5();
  }
}
