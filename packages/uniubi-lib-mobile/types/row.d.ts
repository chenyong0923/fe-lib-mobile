import type { CSSProperties, FC, ReactNode } from 'react';

export interface RowProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  gutter?: number | [number, number];
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  align?: 'top' | 'middle' | 'bottom';
}

declare const Row: FC<RowProps>;

export default Row;
