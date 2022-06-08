import { FC } from 'react';

export interface UOverlayProps {
  className?: string;
  style?: React.CSSProperties;
  visible: boolean;
  onClick?: (event: ITouchEvent) => void;
}

declare const UOverlay: FC<UOverlayProps>;

export default UOverlay;
