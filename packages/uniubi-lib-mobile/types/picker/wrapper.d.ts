import type { CSSProperties, ReactNode } from 'react';

export interface WrapperProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  visible?: boolean;
  title?: ReactNode;
  panel?: ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
  onVisibleChange?: (visible?: boolean) => void;
}
