import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useMemo } from 'react';

import Empty from '@/components/empty';
import AlipayFull from '@/components/list/AlipayFull';
import ScrollWrapper from '@/components/scroll-wrapper';
import { NAV_HEADER_HEIGHT, PREFIX } from '@/constants';
import { getSystemInfoSync, rpxToPx } from '@/utils/common';
import { ListType } from '~/types/list';

import useList from './useList';

export { useList };

const prefix = `${PREFIX}-list`;
const taroEnv = process.env.TARO_ENV;

const List: ListType = (props) => {
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
    enableEndTip,
    ...rest
  } = props;
  // 是否自定义头部
  const { customNavHeader } = full || {};
  // 支付宝体系
  const isAlibaba = taroEnv === 'alipay' || taroEnv === 'dd';
  // statusBar栏高度
  const { statusBarHeight = 0 } = useMemo(() => getSystemInfoSync(), []);

  // 是否数据为空
  const isEmpty = !list?.length;
  // 是否数据已经全部加载完成
  const allLoaded = list?.length >= total;

  // 重写style属性
  const resetStyle = (isScroll: boolean) => {
    if (customNavHeader) {
      const navHeaderHeight =
        Number(rpxToPx(NAV_HEADER_HEIGHT)?.split('px')?.[0]) + statusBarHeight;
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

  // 滑动内容
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

  // 撑满全屏模式且为支付宝体系返回AlipayFull
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
        enableLoadMore={isEmpty ? false : enableLoadMore}
        enableEndTip={isEmpty ? false : enableEndTip}
        {...rest}
      >
        {renderContent()}
      </ScrollWrapper>
    );
  }
};

List.useList = useList;

export default List;
