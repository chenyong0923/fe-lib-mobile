import { Button, ITouchEvent, Text, View } from '@tarojs/components';
import * as iconMaps from '@uniubi/icons-taro';
import classnames from 'classnames';
import React from 'react';

import { UButtonProps } from '../../../types/button';

const prefix = 'ulm-button';

const UButton: React.FC<UButtonProps> = ({
  className,
  children,
  size = 'default',
  type = 'default',
  danger,
  block,
  disabled,
  loading,
  icon,
  onClick,
  ...rest
}) => {
  const handleClick = (e: ITouchEvent) => {
    if (loading || disabled) return;
    onClick?.(e);
  };

  // 按钮图标
  const renderIcon = () => {
    // 如果状态为 Loading，即使 icon 存在也渲染 loading icon
    const Loading = iconMaps.RotateOutlined;
    if (loading) return <Loading />;
    // icon 存在才渲染
    if (!icon) return null;
    const Icon = iconMaps[icon];
    return Icon ? <Icon size={32} /> : null;
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
        { [`${prefix}-loading`]: loading },
        className,
      )}
      disabled={disabled}
      loading={loading}
      onClick={handleClick}
      {...rest}
    >
      <View className={`${prefix}-icon`}>{renderIcon()}</View>
      <Text className={`${prefix}-content`}>{children}</Text>
    </Button>
  );
};

export default UButton;

// TODO:
// 1. Icon 组件重构，不能用 props 来控制颜色，需要用 class
// 2. Icon 在不同类型按钮下的样式
