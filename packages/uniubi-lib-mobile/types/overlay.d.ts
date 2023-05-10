import type { CSSProperties, FC, ReactNode } from 'react';

export interface OverlayProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  visible?: boolean;
  onClick?: (e: ITouchEvent) => void;
  onClosed?: () => void;
}

declare const Overlay: FC<OverlayProps>;

export default Overlay;
