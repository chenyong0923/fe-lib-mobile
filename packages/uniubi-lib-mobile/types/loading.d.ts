import { FC } from 'react';

export interface LoadingProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'default' | 'primary';
  text?: string | React.ReactNode;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

declare const Loading: FC<LoadingProps>;

export default Loading;
