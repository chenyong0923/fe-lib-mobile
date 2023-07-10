import type { CSSProperties, FC, ReactNode } from 'react';

export interface TimelineItemProps {
  className?: string;
  style?: CSSProperties;
  title: ReactNode;
  content?: ReactNode;
  icon?: ReactNode;
}

declare const TimelineItem: FC<TimelineItemProps>;

export default TimelineItem;
