import type { CSSProperties, FC, ReactNode } from 'react';

export interface SwitchProps {
  className?: string;
  style?: CSSProperties;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  checkedLabel?: ReactNode;
  uncheckedLabel?: ReactNode;
  onChange?: (checked: boolean) => void;
}

declare const Switch: FC<SwitchProps>;

export default Switch;
