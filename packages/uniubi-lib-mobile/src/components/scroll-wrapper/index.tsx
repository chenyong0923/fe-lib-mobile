import { ScrollView, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useState } from 'react';

import { PREFIX } from '@/constants';
import { ScrollWrapperProps } from '~/types/scroll-wrapper';

const prefix = `${PREFIX}-scroll-wrapper`;
const taroEnv = process.env.TARO_ENV;

const ScrollWrapper: React.FC<ScrollWrapperProps> = (props) => {
  const {
    className,
    style,
    children,
    endTip,
    enableEndTip = true,
    onRefresh,
    onLoadMore,
    enablePullRefresh,
    enableLoadMore = true,
    loadFinished = true,
    enableBackToTop,
    upperThreshold,
    lowerThreshold,
    scrollTop,
    scrollWithAnimation,
    scrollIntoView,
  } = props;
  const isWeapp = taroEnv === 'weapp';
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const renderRefresh = () => (
    <View
      className={classnames(
        `${prefix}-tip`,
        `${prefix}-refresh`,
        `${prefix}-refresh-${refreshing}`,
      )}
    >
      刷新中...
    </View>
  );

  return (
    <ScrollView
      className={classnames(prefix, `${prefix}-${taroEnv}`, className)}
      style={style}
      scrollY
      refresherEnabled={enablePullRefresh}
      refresherDefaultStyle={'black'}
      refresherTriggered={refreshing}
      enhanced
      onRefresherPulling={() => {
        setRefreshing(true);
      }}
      onRefresherRefresh={() => {
        enablePullRefresh &&
          !refreshing &&
          onRefresh?.()?.finally(() => {
            setRefreshing(false);
          });
      }}
      onScrollToLower={() => {
        enableLoadMore && onLoadMore?.();
      }}
      enableBackToTop={enableBackToTop}
      onScrollToUpper={() => {
        if (enablePullRefresh && !isWeapp && !refreshing) {
          setRefreshing(true);
          onRefresh?.()?.finally(() => {
            setRefreshing(false);
          });
        }
      }}
      upperThreshold={upperThreshold}
      lowerThreshold={lowerThreshold}
      scrollWithAnimation={scrollWithAnimation}
      scrollIntoView={scrollIntoView}
      scrollTop={scrollTop}
    >
      {!isWeapp && enablePullRefresh && renderRefresh()}
      <View className={classnames(`${prefix}-content`)}>{children}</View>
      {enableLoadMore && !loadFinished && (
        <View className={`${prefix}-tip`}>加载中...</View>
      )}
      {enableEndTip && loadFinished && (
        <View className={`${prefix}-tip`}>—— {endTip || '到底啦'} ——</View>
      )}
    </ScrollView>
  );
};

export default ScrollWrapper;
