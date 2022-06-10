import { FC } from 'react';

export interface UPopupProps {
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  overlay?: boolean;
  onClickOverlay?: (e: ITouchEvent) => void;
  onClose?: () => void;
  closeOnClickOverlay?: boolean;
}

declare const UPopup: FC<UPopupProps>;

export default UPopup;
