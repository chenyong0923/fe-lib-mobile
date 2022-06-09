import { FC } from 'react';

export interface UOverlayProps {
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  onClick?: (e: ITouchEvent) => void;
  onClosed?: () => void;
}

declare const UOverlay: FC<UOverlayProps>;

export default UOverlay;
