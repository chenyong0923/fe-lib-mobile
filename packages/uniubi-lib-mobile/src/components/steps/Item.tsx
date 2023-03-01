import { View } from '@tarojs/components';
import { CheckOutlined } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React, { useContext } from 'react';

import { PREFIX } from '@/constants';

import StepsContext from './context';

import type { StepsItemProps } from '~/types/steps/item';
import type { FC } from 'react';

const prefixCls = `${PREFIX}-steps-item`;

const StepsItem: FC<StepsItemProps> = ({
  className,
  style,
  children,
  index = 1,
  title,
  description,
  onClick,
  onSelect,
}) => {
  const { activeValue } = useContext(StepsContext);

  return (
    <View
      className={classnames(
        `${prefixCls}`,
        {
          [`${prefixCls}-active`]: index === activeValue,
          [`${prefixCls}-finished`]: index < activeValue,
        },
        className,
      )}
      style={style}
      onClick={(e) => {
        onClick?.(e);
        onSelect?.(index);
      }}
    >
      <View className={`${prefixCls}-content`}>
        <View className={`${prefixCls}-content-header`}>
          <View className={`${prefixCls}-content-index`}>
            {index < activeValue ? <CheckOutlined /> : index}
          </View>
        </View>
        <View className={`${prefixCls}-content-body`}>
          <View className={`${prefixCls}-content-title`}>{title}</View>
          <View className={`${prefixCls}-content-desc`}>{description}</View>
        </View>
      </View>
      {children && <View className={`${prefixCls}-extra`}>{children}</View>}
    </View>
  );
};

export default StepsItem;
