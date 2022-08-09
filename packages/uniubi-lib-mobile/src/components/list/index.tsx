import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useMemo } from 'react';

import Empty from '@/components/empty';
import AlipayFull from '@/components/list/AlipayFull';
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
    header,
    footer,
    full,
    className,
    style = {},
    onRefresh,
    onLoadMore,
    enablePullRefresh,
    enableLoadMore,
    ...rest
  } = props;

  const isAlibaba = taroEnv === 'alipay' || taroEnv === 'dd';
  const allLoaded = !!list?.length && list?.length >= total;

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

  const renderContent = () => (
    <View className={classnames(`${prefix}-body`)}>
      <View className={classnames(`${prefix}-body-header`)}>{header}</View>
      <View className={classnames(`${prefix}-body-content`)}>
        {list?.length ? (
          list?.map((item, index) => renderItem(item, index))
        ) : (
          <Empty {...emptyProps} />
        )}
      </View>
      <View className={classnames(`${prefix}-body-footer`)}>{footer}</View>
    </View>
  );

  if (isAlibaba && full) {
    return (
      <AlipayFull
        className={classnames(prefix, `${prefix}-view-full`, className)}
        style={resetStyle(false)}
      >
        {renderContent()}
      </AlipayFull>
    );
  } else {
    return (
      <ScrollWrapper
        allLoaded={allLoaded}
        className={classnames(
          prefix,
          `${prefix}-${taroEnv}`,
          { [`${prefix}-scroll-full`]: !!full },
          className,
        )}
        style={resetStyle(true)}
        onRefresh={onRefresh}
        onLoadMore={onLoadMore}
        enablePullRefresh={enablePullRefresh}
        enableLoadMore={enableLoadMore}
        {...rest}
      >
        {renderContent()}
      </ScrollWrapper>
    );
  }
};

export default List;
