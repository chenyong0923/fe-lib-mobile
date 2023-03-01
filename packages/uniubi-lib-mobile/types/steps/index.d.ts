import Item from './item';

import type { CSSProperties, ReactNode } from 'react';

export interface StepsProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  layout?: 'horizontal' | 'vertical';
  active?: number;
}

declare const Steps: ((props: StepsProps) => JSX.Element) & {
  Item: typeof Item;
};

export default Steps;
