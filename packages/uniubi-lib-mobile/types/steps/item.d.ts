import type { CSSProperties, FC, ReactNode } from 'react';

export interface StepsItemProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  index?: number;
  title?: ReactNode;
  description?: ReactNode;
  onClick?: (e: ITouchEvent) => void;
  onSelect?: (index: number) => void;
}

declare const StepsItem: FC<StepsItemProps>;

export default StepsItem;
