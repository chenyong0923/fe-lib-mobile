import { ButtonProps as TaroButtonProps } from '@tarojs/components';
import { FC } from 'react';

export interface ButtonProps extends TaroButtonProps {
  type?: 'default' | 'primary' | 'secondary' | 'link' | 'text';
  size?: 'default' | 'small';
  danger?: boolean;
  block?: boolean;
  round?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

declare const Button: FC<ButtonProps>;

export default Button;
