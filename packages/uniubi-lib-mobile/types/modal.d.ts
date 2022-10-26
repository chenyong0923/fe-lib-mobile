import type { ButtonProps } from './button';
import type { CSSProperties, FC, ReactNode } from 'react';

export interface ModalProps {
  className?: string;
  style?: CSSProperties;
  visible?: boolean;
  title?: ReactNode;
  okText?: ReactNode;
  okBtnProps?: ButtonProps;
  onOk?: () => void;
  cancelText?: ReactNode;
  cancelBtnProps?: ButtonProps;
  onCancel?: () => void;
  onClickOverlay?: () => void;
  closeOnClickOverlay?: boolean;
  roundButton?: boolean;
  footer?: ReactNode;
}

declare const Modal: FC<ModalProps>;

export default Modal;
