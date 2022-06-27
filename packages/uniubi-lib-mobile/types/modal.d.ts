import { CSSProperties, FC, ReactNode } from 'react';

export interface ModalProps {
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
  title?: ReactNode;
  okText?: ReactNode;
  onOk?: () => void;
  cancelText?: ReactNode;
  onCancel?: () => void;
  onClickOverlay?: () => void;
  closeOnClickOverlay?: boolean;
  roundButton?: boolean;
  footer?: ReactNode;
}

declare const Modal: FC<ModalProps>;

export default Modal;
