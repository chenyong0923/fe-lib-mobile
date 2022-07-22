import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { ScrollWrapper } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const data = [
  { id: 1, name: '1-1' },
  { id: 2, name: '1-2' },
  { id: 3, name: '1-3' },
  { id: 4, name: '1-4' },
  { id: 5, name: '1-5' },
  { id: 6, name: '1-6' },
];
const Page = () => {
  const [list, setList] = useState<any[]>(data);
  const refresh = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setList(data);
        resolve(true);
      }, 1000);
    });
  };
  const loadMore = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setList([
          ...data,
          ...data?.map((item) => ({
            id: item.id + 6,
            name: `2-${item.name?.split('-')?.[1]}`,
          })),
        ]);
        resolve(true);
      }, 1000);
    });
  };
  return (
    <BasicLayout>
      <Section title="基础使用">
        <ScrollWrapper>
          {data?.map((item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          ))}
        </ScrollWrapper>
      </Section>
      <Section title="下拉刷新">
        <ScrollWrapper enablePullRefresh onRefresh={refresh}>
          {list?.map((item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          ))}
        </ScrollWrapper>
      </Section>
      <Section title="下拉加载">
        <ScrollWrapper
          enablePullRefresh
          onRefresh={refresh}
          enableLoadMore
          enableEndTip
          loadFinished={list?.length === 12}
          onLoadMore={loadMore}
        >
          {list?.map((item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          ))}
        </ScrollWrapper>
      </Section>
    </BasicLayout>
  );
};

export default Page;
