import type { CSSProperties, FC, ReactNode } from 'react';

export interface DescriptionsItemProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  label: ReactNode;
  span?: number;
}

declare const DescriptionsItem: FC<DescriptionsItemProps>;

export default DescriptionsItem;
