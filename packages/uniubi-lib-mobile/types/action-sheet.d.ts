import { FC } from 'react';

export interface IAction {
  name?: string;
  onClick?: () => void;
  disabled?: boolean;
  danger?: boolean;
}

export interface ActionSheetProps {
  className?: string;
  style?: React.CSSProperties;
  visible?: boolean;
  onCancel?: () => void;
  onClose?: () => void;
  actions?: IAction[];
  closeOnClickAction?: boolean;
  onClickOverlay?: () => void;
  closeOnClickOverlay?: boolean;
}

declare const ActionSheet: FC<ActionSheetProps>;

export default ActionSheet;
