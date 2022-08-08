import { View } from '@tarojs/components';
import Taro, { usePullDownRefresh, useReachBottom } from '@tarojs/taro';
import classnames from 'classnames';
import React, { useMemo } from 'react';

import Empty from '@/components/empty';
import ScrollWrapper from '@/components/scroll-wrapper';
import { PREFIX } from '@/constants';
import { getSystemInfoSync, rpxToPx } from '@/utils/common';
import { ListProps } from '~/types/list';

const prefix = `${PREFIX}-list`;
const taroEnv = process.env.TARO_ENV;

const List: React.FC<ListProps> = (props) => {
  const {
    emptyProps,
    renderItem,
    list,
    total = list?.length,
    renderHeader,
    renderFooter,
    full,
    className,
    style = {},
    ...rest
  } = props;

  const { onRefresh, onLoadMore, enablePullRefresh, enableLoadMore } = rest;
  const isAlibaba = taroEnv === 'alipay' || taroEnv === 'dd';
  const loadFinished = !!list?.length && list?.length >= total;

  // 加载更多
  useReachBottom(() => {
    if (isAlibaba && full && enableLoadMore && !loadFinished) {
      onLoadMore?.();
    }
  });

  // 下拉刷新
  usePullDownRefresh(() => {
    if (isAlibaba && full && enablePullRefresh) {
      onRefresh?.()
        .then(() => {
          Taro.stopPullDownRefresh();
        })
        .catch(() => {
          Taro.stopPullDownRefresh();
        });
    }
  });

  const renderContent = () => (
    <View>
      {renderHeader}
      <View className={classnames(`${prefix}-content`)}>
        {list?.length ? (
          list?.map((item, index) => renderItem(item, index))
        ) : (
          <Empty {...emptyProps} />
        )}
      </View>
      {renderFooter}
    </View>
  );

  const { customNavHeader } = full || {};

  const { statusBarHeight = 0 } = useMemo(() => getSystemInfoSync(), []);

  const resetStyle = (isScroll: boolean) => {
    if (customNavHeader) {
      const navHeaderHeight =
        Number(rpxToPx(96)?.split('px')?.[0]) + statusBarHeight;
      const scrollStyle: React.CSSProperties = {
        height: `calc(100vh - ${navHeaderHeight}px)`,
        top: `${navHeaderHeight}px`,
      };
      const viewStyle: React.CSSProperties = {
        minHeight: `calc(100vh - ${navHeaderHeight}px)`,
      };
      return Object.assign(isScroll ? scrollStyle : viewStyle, style);
    } else {
      return style;
    }
  };

  if (isAlibaba && full) {
    return (
      <View
        className={classnames(prefix, `${prefix}-view-full`, className)}
        style={resetStyle(false)}
      >
        {renderContent()}
      </View>
    );
  }

  return (
    <ScrollWrapper
      loadFinished={loadFinished}
      className={classnames(
        prefix,
        `${prefix}-${taroEnv}`,
        { [`${prefix}-scroll-full`]: !!full },
        className,
      )}
      style={resetStyle(true)}
      {...rest}
    >
      {renderContent()}
    </ScrollWrapper>
  );
};

export default List;
