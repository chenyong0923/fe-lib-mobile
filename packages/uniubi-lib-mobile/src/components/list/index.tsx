import { ScrollView, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useState } from 'react';

import { PREFIX } from '@/constants';
import { ListProps } from '~/types/list';

const prefix = `${PREFIX}-list`;
const taroEnv = process.env.TARO_ENV;

const List: React.FC<ListProps> = (props) => {
  const {
    className,
    style,
    endTip,
    enableEndTip = true,
    list,
    total = list?.length,
    renderItem,
    renderHeader,
    renderFooter,
    onRefresh,
    onLoadMore,
    lowerThreshold,
    enablePullRefresh,
    enableBackToTop,
  } = props;
  const isEnd = list?.length >= total;
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
      lowerThreshold={lowerThreshold}
      refresherEnabled={!!onRefresh && enablePullRefresh}
      refresherDefaultStyle={'black'}
      refresherTriggered={refreshing}
      enhanced
      onRefresherPulling={() => {
        setRefreshing(true);
      }}
      onRefresherRefresh={() => {
        onRefresh?.()?.finally(() => {
          setRefreshing(false);
        });
      }}
      onScrollToLower={onLoadMore}
      enableBackToTop={enableBackToTop}
      onScrollToUpper={() => {
        if (taroEnv === 'h5' && !refreshing) {
          setRefreshing(true);
          onRefresh?.()?.finally(() => {
            setRefreshing(false);
          });
        }
      }}
    >
      {taroEnv === 'h5' && enablePullRefresh && renderRefresh()}
      {renderHeader}
      <View className={classnames(`${prefix}-content`)}>
        {list?.map((item, index) => renderItem(item, index))}
      </View>
      {renderFooter}
      {enableEndTip && isEnd && (
        <View className={`${prefix}-tip`}>—— {endTip || '到底啦'} ——</View>
      )}
      {!isEnd && <View className={`${prefix}-tip`}>加载中...</View>}
    </ScrollView>
  );
};

export default List;
