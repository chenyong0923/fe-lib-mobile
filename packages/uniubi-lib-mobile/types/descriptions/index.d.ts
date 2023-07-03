import Item from './item';

import type { CSSProperties, ReactNode } from 'react';

type LayoutType = 'horizontal' | 'vertical';

export interface DescriptionsProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  layout?: LayoutType;
  colon?: boolean;
}

declare const Descriptions: ((props: DescriptionsProps) => JSX.Element) & {
  Item: typeof Item;
};

export default Descriptions;
