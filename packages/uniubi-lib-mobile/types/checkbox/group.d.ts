import type { CSSProperties, FC, ReactNode } from 'react';

export interface CheckboxGroupProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  value?: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
}

declare const CheckboxGroup: FC<CheckboxGroupProps>;

export default CheckboxGroup;
