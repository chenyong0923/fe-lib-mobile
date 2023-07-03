import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import { SpaceProps } from '../../../types/space';

const prefixCls = `${PREFIX}-space`;

const Space = ({
  className,
  style,
  children,
  size = 16,
  align = 'center',
}: SpaceProps) => {
  return (
    <View
      className={classnames(prefixCls, className)}
      style={{ ...style, gap: Taro.pxTransform(size), alignItems: align }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return <View className={`${prefixCls}-item`}>{child}</View>;
        }
        return null;
      })}
    </View>
  );
};

export default Space;
