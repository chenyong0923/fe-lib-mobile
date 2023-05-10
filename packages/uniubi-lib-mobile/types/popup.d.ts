import type { CSSProperties, FC, ReactNode } from 'react';

export interface PopupProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  visible?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  overlay?: boolean;
  onClickOverlay?: (e: ITouchEvent) => void;
  onClose?: () => void;
  closeOnClickOverlay?: boolean;
}

declare const Popup: FC<PopupProps>;

export default Popup;
