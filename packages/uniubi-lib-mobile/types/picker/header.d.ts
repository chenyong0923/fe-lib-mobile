import type { ButtonProps } from '../button';
import type { CSSProperties, ReactNode } from 'react';

export interface HeaderProps {
  className?: string;
  style?: CSSProperties;
  title?: ReactNode;
  onOk?: ButtonProps['onClick'];
  onCancel?: ButtonProps['onClick'];
}
