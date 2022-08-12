import { StandardProps, View } from '@tarojs/components';
import Taro, { usePullDownRefresh, useReachBottom } from '@tarojs/taro';
import React from 'react';

import { ScrollWrapperProps } from '~/types/scroll-wrapper';

interface AlipayFullProps
  extends StandardProps,
    Pick<
      ScrollWrapperProps,
      | 'enableLoadMore'
      | 'allLoaded'
      | 'onLoadMore'
      | 'enablePullRefresh'
      | 'onRefresh'
    > {}

const AlipayFull: React.FC<AlipayFullProps> = ({
  className,
  children,
  style,
  enableLoadMore,
  enablePullRefresh,
  allLoaded,
  onLoadMore,
  onRefresh,
}) => {
  // 加载更多
  useReachBottom(() => {
    if (enableLoadMore && !allLoaded) {
      onLoadMore?.();
    }
  });

  // 下拉刷新
  usePullDownRefresh(() => {
    if (enablePullRefresh) {
      onRefresh?.()
        .then(() => {
          Taro.stopPullDownRefresh();
        })
        .catch(() => {
          Taro.stopPullDownRefresh();
        });
    }
  });
  return (
    <View className={className} style={style}>
      {children}
    </View>
  );
};

export default AlipayFull;
