import { View } from '@tarojs/components';
import Taro, { usePullDownRefresh, useReachBottom } from '@tarojs/taro';
import classnames from 'classnames';
import React from 'react';

import Empty from '@/components/empty';
import ScrollWrapper from '@/components/scroll-wrapper';
import { PREFIX } from '@/constants';
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
    ...rest
  } = props;
  const { style, onRefresh, onLoadMore, enablePullRefresh, enableLoadMore } =
    rest;
  const isAlibaba = taroEnv === 'alipay' || taroEnv === 'dd';
  const loadFinished = list?.length >= total;

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

  if (isAlibaba && full) {
    return (
      <View
        className={classnames(
          prefix,
          `${prefix}-${taroEnv}`,
          `${prefix}-view-full`,
          className,
        )}
        style={style}
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
        { [`${prefix}-scroll-full`]: full },
        className,
      )}
      {...rest}
    >
      {renderContent()}
    </ScrollWrapper>
  );
};

export default List;
