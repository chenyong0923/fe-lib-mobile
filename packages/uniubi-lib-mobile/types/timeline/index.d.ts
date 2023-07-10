import Item from './item';

import type { CSSProperties, ReactNode } from 'react';

export interface TimelineProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

declare const Timeline: ((props: TimelineProps) => JSX.Element) & {
  Item: typeof Item;
};

export default Timeline;
