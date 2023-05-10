import type { CSSProperties, FC, ReactNode } from 'react';

export interface LoadingProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  type?: 'default' | 'primary';
  text?: string | ReactNode;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
}

declare const Loading: FC<LoadingProps>;

export default Loading;
