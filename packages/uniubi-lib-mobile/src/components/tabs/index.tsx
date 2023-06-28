import { ScrollView, Text, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';

import { PREFIX } from '@/constants';
import { uuid } from '@/utils/common';
import { queryDom, queryDomScroll, queryViewScroll } from '@/utils/dom';
import { TabsProps } from '~/types/tabs';

import TabsContext from './context';
import Pane from './Pane';

import type { CSSProperties } from 'react';

const prefix = `${PREFIX}-tabs`;

// 选项卡平均排列的最大数量，超出该数量后进行滚动
const MAX_COUNT = 4;

const Tabs = ({
  className,
  style,
  layout = 'horizontal',
  activeKey,
  onChange,
  line = true,
  children,
  ...rest
}: TabsProps) => {
  // 给组件做唯一标识，避免多个组件同时渲染时获取 dom 错误问题
  const rootName = useMemo(() => `${prefix}-${uuid()}`, []);
  // 选中项 key 值
  const [activeTabKey, setActiveTabKey] = useState<string>(
    // 把第一个tab项作为默认选中项
    (React.Children.toArray(children)?.[0] as any)?.props?.tabKey,
  );
  // 视图窗口滚动信息
  const [viewInfo, setViewInfo] = useState<{ scrollTop: number }>({
    scrollTop: 0,
  });
  // 选项卡导航信息
  const [navInfo, setNavInfo] = useState<{
    left: number;
    top: number;
    scrollLeft: number;
    scrollTop: number;
  }>({
    left: 0,
    top: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  // 高亮线的信息
  const [barInfo, setBarInfo] = useState<{
    width: number;
    height: number;
    left: number;
    top: number;
  }>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  // 选项卡的数量
  const childCount = React.Children.count(children);

  useEffect(() => {
    // 获取到容器信息
    queryDom(`.${rootName} .${prefix}-nav`).then((res) => {
      if (layout === 'horizontal') {
        setNavInfo((prev) => ({
          ...prev,
          left: res?.left ?? 0,
        }));
      } else if (layout === 'vertical') {
        setNavInfo((prev) => ({
          ...prev,
          top: res?.top ?? 0,
        }));
      }
    });
  }, []);

  // 受控时，当外部 activeKey 变化时要同步组件内部选中 key
  useEffect(() => {
    activeKey && setActiveTabKey(activeKey);
  }, [activeKey]);

  useEffect(() => {
    // 获取到选中的tab项后记录高亮线的位置和宽高信息
    queryDom(
      `.${rootName} .${prefix}-nav-item-key${activeTabKey} .${prefix}-nav-item-inner`,
    ).then((res) => {
      if (layout === 'horizontal') {
        setBarInfo((prev) => ({
          ...prev,
          width: res?.width ?? 0,
          left: res?.left ?? 0,
        }));
      } else if (layout === 'vertical') {
        setBarInfo((prev) => ({
          ...prev,
          height: res?.height ?? 0,
          top: res?.top ?? 0,
        }));
      }
    });
    // 获取滚动信息
    queryDomScroll(`.${rootName} .${prefix}-nav`).then((res) => {
      if (layout === 'horizontal') {
        setNavInfo((prev) => ({
          ...prev,
          scrollLeft: res?.scrollLeft ?? 0,
        }));
      } else if (layout === 'vertical') {
        setNavInfo((prev) => ({
          ...prev,
          scrollTop: res?.scrollTop ?? 0,
        }));
      }
    });
    // 获取视图滚动信息
    queryViewScroll().then((res) => {
      if (layout === 'vertical') {
        setViewInfo((prev) => ({
          ...prev,
          scrollTop: res?.scrollTop ?? 0,
        }));
      }
    });
  }, [activeTabKey]);

  // 渲染高亮线
  const renderLine = () => {
    if (!line) return null;
    if (layout === 'horizontal') {
      return (
        <View
          className={`${prefix}-nav-bar`}
          style={{
            width: barInfo.width,
            left: barInfo.left - navInfo.left + navInfo.scrollLeft,
          }}
        />
      );
    } else if (layout === 'vertical') {
      // const index = React.Children.toArray(children).findIndex(
      //   (item) => (item as any).props.tabKey === activeTabKey,
      // );
      console.log('barInfo', barInfo);
      console.log('navInfo', navInfo);
      console.log('viewInfo', viewInfo);
      return (
        <View
          className={`${prefix}-nav-bar`}
          style={{
            height: barInfo.height,
            top:
              barInfo.top -
              navInfo.top +
              navInfo.scrollTop +
              viewInfo.scrollTop,
          }}
        />
      );
    }
  };

  // 切换选项卡
  const handleTabChange = (key: string) => {
    !activeKey && setActiveTabKey(key);
    onChange?.(key);
  };

  return (
    <TabsContext.Provider value={{ activeKey: activeTabKey }}>
      <View
        className={classnames(
          prefix,
          `${prefix}-${layout}`,
          rootName,
          className,
        )}
        style={style}
        {...rest}
      >
        <ScrollView
          className={`${prefix}-nav`}
          scrollX={layout === 'horizontal'}
          scrollY={layout === 'vertical'}
          enhanced
          showScrollbar={false}
        >
          <View className={`${prefix}-nav-inner`}>
            {React.Children.map(children, (child) => {
              const { tab, tabKey } = (child as any).props;
              const itemStyle: CSSProperties = {};
              // 水平布局时需要设置宽度
              if (layout === 'horizontal') {
                itemStyle.width =
                  childCount <= MAX_COUNT ? `${100 / childCount}%` : 'auto';
              }
              return (
                <View
                  className={classnames(
                    `${prefix}-nav-item`,
                    `${prefix}-nav-item-key${tabKey}`,
                    {
                      [`${prefix}-nav-item-active`]: activeTabKey === tabKey,
                    },
                  )}
                  style={itemStyle}
                  onClick={() => {
                    handleTabChange(tabKey);
                  }}
                >
                  <Text className={`${prefix}-nav-item-inner`}>{tab}</Text>
                </View>
              );
            })}
            {renderLine()}
          </View>
        </ScrollView>
        <View className={`${prefix}-content`}>{children}</View>
      </View>
    </TabsContext.Provider>
  );
};

Tabs.Pane = Pane;

export default Tabs;
