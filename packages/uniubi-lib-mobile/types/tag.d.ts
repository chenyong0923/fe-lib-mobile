import type { CSSProperties, FC, ReactNode } from 'react';

export interface TagProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  size?: 'small' | 'default' | 'large';
  color?: string;
  icon?: ReactNode;
  border?: boolean;
  round?: boolean;
  fill?: boolean;
  closable?: boolean;
  onClick?: (e: ITouchEvent) => void;
  onClose?: (e: ITouchEvent) => void;
}

declare const Tag: FC<TagProps>;

export default Tag;
