import type { InputProps as TaroInputProps } from '@tarojs/components';
import type { FC, ReactNode } from 'react';

export interface InputProps extends Omit<TaroInputProps, 'onInput'> {
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  border?: boolean;
  onChange?: (value?: string) => void;
}

declare const Input: FC<InputProps>;

export default Input;
