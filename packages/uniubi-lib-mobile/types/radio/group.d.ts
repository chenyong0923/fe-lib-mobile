import type { CSSProperties, FC } from 'react';

export interface RadioGroupProps {
  className?: string;
  style?: CSSProperties;
  value?: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
}

declare const RadioGroup: FC<RadioGroupProps>;

export default RadioGroup;
