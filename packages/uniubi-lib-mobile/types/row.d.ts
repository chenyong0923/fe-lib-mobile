import { FC } from 'react';

export interface RowProps {
  className?: string;
  style?: React.CSSProperties;
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
