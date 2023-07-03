import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import { DescriptionsItemProps } from '../../../types/descriptions/item';

const prefixCls = `${PREFIX}-descriptions-item`;

const DescriptionsItem = ({
  className,
  style,
  children,
  label,
  span = 24,
}: DescriptionsItemProps) => {
  return (
    <View
      className={classnames(prefixCls, className)}
      style={{
        gridColumnEnd: `span ${span > 24 ? 24 : span}`,
        ...style,
      }}
    >
      <View className={`${prefixCls}-label`}>{label}</View>
      <View className={`${prefixCls}-content`}>{children}</View>
    </View>
  );
};

export default DescriptionsItem;
