import { FC } from 'react';

export interface ULoadingProps {
  className?: string;
  style?: React.CSSProperties;
  type?: 'default' | 'primary';
  text?: string | React.ReactNode;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

declare const UButton: FC<ULoadingProps>;

export default UButton;
