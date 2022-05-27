import { ButtonProps } from '@tarojs/components';
import { FC } from 'react';

export interface UButtonProps extends ButtonProps {
  type?: 'default' | 'primary' | 'secondary' | 'link' | 'text';
  size?: 'default' | 'small';
  danger?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
}

declare const UButton: FC<UButtonProps>;

export default UButton;
