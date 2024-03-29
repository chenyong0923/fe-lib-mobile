import {
  Button as TaroButton,
  ITouchEvent,
  Text,
  View,
} from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import { ButtonProps } from '../../../types/button';
import Loading from '../loading';

const prefix = `${PREFIX}-button`;

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  size = 'default',
  type = 'default',
  danger,
  block,
  round = false,
  disabled = false,
  loading = false,
  icon,
  onClick,
  ...rest
}) => {
  const handleClick = (e: ITouchEvent) => {
    if (loading || disabled) return;
    onClick?.(e);
  };

  return (
    <TaroButton
      className={classnames(
        prefix,
        { [`${prefix}-small`]: size === 'small' },
        {
          [`${prefix}-primary`]: type === 'primary',
          [`${prefix}-secondary`]: type === 'secondary',
          [`${prefix}-link`]: type === 'link',
          [`${prefix}-text`]: type === 'text',
        },
        { [`${prefix}-danger`]: danger },
        { [`${prefix}-block`]: block },
        { [`${prefix}-round`]: round },
        { [`${prefix}-disabled`]: disabled },
        { [`${prefix}-loading`]: loading },
        className,
      )}
      // disabled 为 false 时，不传 disabled 属性，否则 h5 会被渲染成 disabled="false"
      disabled={disabled || undefined}
      onClick={handleClick}
      {...rest}
    >
      <View className={`${prefix}-icon`}>{loading ? <Loading /> : icon}</View>
      <Text className={`${prefix}-content`}>{children}</Text>
    </TaroButton>
  );
};

export default Button;
