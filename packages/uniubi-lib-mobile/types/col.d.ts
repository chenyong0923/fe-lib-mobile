import type { CSSProperties, FC, ReactNode } from 'react';

export interface ColProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  span?: number;
  offset?: number;
}

declare const Col: FC<ColProps>;

export default Col;
