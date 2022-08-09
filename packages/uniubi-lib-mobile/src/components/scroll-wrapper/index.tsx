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
    enableEndTip = '到底了',
    onRefresh,
    onLoadMore,
    enablePullRefresh,
    enableLoadMore = false,
    allLoaded = true,
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

  const handleRefresh = () => {
    if (enablePullRefresh && !refreshing) {
      setRefreshing(true);
      onRefresh?.()?.finally(() => {
        setRefreshing(false);
      });
    }
  };

  return (
    <ScrollView
      className={classnames(prefix, `${prefix}-${taroEnv}`, className)}
      style={style}
      scrollY
      refresherEnabled={enablePullRefresh}
      refresherDefaultStyle={'black'}
      refresherTriggered={refreshing}
      enhanced
      onRefresherRefresh={handleRefresh}
      onScrollToLower={() => {
        enableLoadMore && onLoadMore?.();
      }}
      enableBackToTop={enableBackToTop}
      onScrollToUpper={isWeapp ? undefined : handleRefresh}
      upperThreshold={upperThreshold}
      lowerThreshold={lowerThreshold}
      scrollWithAnimation={scrollWithAnimation}
      scrollIntoView={scrollIntoView}
      scrollTop={scrollTop}
    >
      {!isWeapp && enablePullRefresh && renderRefresh()}
      <View className={classnames(`${prefix}-content`)}>{children}</View>
      {(enableLoadMore || enableEndTip) && (
        <View
          className={classnames(`${prefix}-tip`, {
            [`${prefix}-tip-end`]: allLoaded,
          })}
        >
          {allLoaded ? enableEndTip : '加载中...'}
        </View>
      )}
    </ScrollView>
  );
};

export default ScrollWrapper;
