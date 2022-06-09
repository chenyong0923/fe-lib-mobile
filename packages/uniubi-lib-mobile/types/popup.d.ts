import { FC } from 'react';

export interface UPopupProps {
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  onClose?: () => void;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  closeOnClickOverlay?: boolean;
  onBeforeEnter?: () => void;
  onBeforeLeave?: () => void;
  onAfterEnter?: () => void;
  onAfterLeave?: () => void;
  onEnter?: () => void;
  onLeave?: () => void;
}

declare const UPopup: FC<UPopupProps>;

export default UPopup;
