import { FC } from 'react';

export interface OverlayProps {
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  onClick?: (e: ITouchEvent) => void;
  onClosed?: () => void;
}

declare const Overlay: FC<OverlayProps>;

export default Overlay;
