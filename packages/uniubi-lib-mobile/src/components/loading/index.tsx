import { Block, View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { LoadingProps } from '~/types/loading';

const prefix = `${PREFIX}-loading`;

const Loading: React.FC<LoadingProps> = ({
  className,
  style,
  children,
  type = 'default',
  text,
  loading = true,
}) => {
  // 是否作为容器嵌套内容
  const isNest = !!children;

  // 渲染旋转图案和文案
  const renderSpin = () => {
    return (
      <View
        className={classnames(
          prefix,
          { [`${prefix}-primary`]: type === 'primary' },
          className,
        )}
        style={style}
      >
        <View className={`${prefix}-spin`}>
          {Array.from({ length: 12 }).map((_, index) => (
            <View key={index} className={`${prefix}-spin-item`} />
          ))}
        </View>
        {text && <View className={`${prefix}-text`}>{text}</View>}
      </View>
    );
  };

  // 根据是否为容器模式判断是否需要外层 DOM
  return isNest ? (
    <View className={`${prefix}-nest`}>
      {loading && <View className={`${prefix}-mask`}>{renderSpin()}</View>}
      <View
        className={classnames(`${prefix}-container`, {
          [`${prefix}-container-blur`]: loading,
        })}
      >
        {children}
      </View>
    </View>
  ) : (
    <Block>{renderSpin()}</Block>
  );
};

export default Loading;
