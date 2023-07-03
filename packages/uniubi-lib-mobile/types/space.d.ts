import type { CSSProperties, FC, ReactNode } from 'react';

export interface SpaceProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  size?: number;
  align?: 'start' | 'end' | 'center' | 'baseline';
}

declare const Space: FC<SpaceProps>;

export default Space;
