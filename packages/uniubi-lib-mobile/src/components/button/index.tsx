import { Button, ITouchEvent, Text, View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { UButtonProps } from '../../../types/button';
import Loading from '../loading';

const prefix = 'ulm-button';

const UButton: React.FC<UButtonProps> = ({
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
    <Button
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
        { [`${prefix}-loading`]: loading },
        className,
      )}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      <View className={`${prefix}-icon`}>{loading ? <Loading /> : icon}</View>
      <Text className={`${prefix}-content`}>{children}</Text>
    </Button>
  );
};

export default UButton;
