import type { CSSProperties, FC, ReactNode } from 'react';

export interface RadioGroupProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  value?: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
}

declare const RadioGroup: FC<RadioGroupProps>;

export default RadioGroup;
