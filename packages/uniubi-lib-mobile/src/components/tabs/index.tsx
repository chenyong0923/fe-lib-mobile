import { ScrollView, Text, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';

import { PREFIX } from '@/constants';
import { uuid } from '@/utils/common';
import { queryDom, queryDomScroll } from '@/utils/dom';
import { TabsProps } from '~/types/tabs';

import TabsContext from './context';
import Pane from './Pane';

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
  const [activeTabKey, setActiveTabKey] = useState<string>();
  // 选项卡导航信息
  const [navInfo, setNavInfo] = useState<{ left: number; scrollLeft: number }>({
    left: 0,
    scrollLeft: 0,
  });
  // 高亮线的信息
  const [barInfo, setBarInfo] = useState<{ width: number; left: number }>({
    width: 0,
    left: 0,
  });
  // 选项卡的数量
  const childCount = React.Children.count(children);

  useEffect(() => {
    // 把第一个tab项作为默认选中项
    const defaultActiveKey = (React.Children.toArray(children)?.[0] as any)
      ?.props?.tabKey;
    setActiveTabKey(defaultActiveKey);
  }, []);

  useEffect(() => {
    // 获取到容器信息
    queryDom(`.${rootName} .${prefix}-nav`).then((res) => {
      setNavInfo((prev) => ({
        ...prev,
        left: res?.left ?? 0,
      }));
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
      setBarInfo({ width: res?.width ?? 0, left: res?.left ?? 0 });
    });
    // 获取滚动信息
    queryDomScroll(`.${rootName} .${prefix}-nav`).then((res) => {
      setNavInfo((prev) => ({
        ...prev,
        scrollLeft: res?.scrollLeft ?? 0,
      }));
    });
  }, [activeTabKey]);

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
          { [`${prefix}-scroll`]: childCount > MAX_COUNT }, // 数量过多时滚动显示
          className,
        )}
        style={style}
        {...rest}
      >
        <ScrollView className={`${prefix}-nav`} scrollX>
          <View className={`${prefix}-nav-inner`}>
            {React.Children.map(children, (child) => {
              const { tab, tabKey } = (child as any).props;
              return (
                <View
                  className={classnames(
                    `${prefix}-nav-item`,
                    `${prefix}-nav-item-key${tabKey}`,
                    {
                      [`${prefix}-nav-item-active`]: activeTabKey === tabKey,
                    },
                  )}
                  style={{
                    width:
                      childCount <= MAX_COUNT ? `${100 / childCount}%` : 'auto',
                  }}
                  onClick={() => {
                    handleTabChange(tabKey);
                  }}
                >
                  <Text className={`${prefix}-nav-item-inner`}>{tab}</Text>
                </View>
              );
            })}
            {line && (
              <View
                className={`${prefix}-nav-bar`}
                style={{
                  width: barInfo.width,
                  left: barInfo.left - navInfo.left + navInfo.scrollLeft,
                }}
              />
            )}
          </View>
        </ScrollView>
        <View className={`${prefix}-content`}>{children}</View>
      </View>
    </TabsContext.Provider>
  );
};

Tabs.Pane = Pane;

export default Tabs;
