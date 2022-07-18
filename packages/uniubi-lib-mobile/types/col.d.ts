import { FC } from 'react';

export interface ColProps {
  className?: string;
  style?: React.CSSProperties;
  span?: number;
  offset?: number;
}

declare const Col: FC<ColProps>;

export default Col;
