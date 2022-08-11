import { Input, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { Button, List, useList } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

import { getPageSearchApi, getSingleListApi } from './request';

const data = [
  { id: 1, name: '1-1' },
  { id: 2, name: '1-2' },
  { id: 3, name: '1-3' },
  { id: 4, name: '1-4' },
  { id: 5, name: '1-5' },
  { id: 6, name: '1-6' },
  { id: 7, name: '1-7' },
  { id: 8, name: '1-8' },
  { id: 9, name: '1-9' },
  { id: 10, name: '1-10' },
];
const Page = () => {
  const [list, setList] = useState<any[]>(data);
  const [full, setFull] = useState<boolean>(false);
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
            id: item.id + 10,
            name: `2-${item.name?.split('-')?.[1]}`,
          })),
        ]);
        resolve(true);
      }, 1000);
    });
  };
  const singleList = useList({
    request: getSingleListApi,
    responseListKey: 'data',
    pagination: false,
  });

  const pageList = useList({
    request: getPageSearchApi,
    responseListKey: ['data', 'list'],
    pagination: {
      pageKey: 'page',
      pageSizeKey: 'pageSize',
      pageSize: 10,
      totalKey: ['data', 'total'],
    },
  });
  return (
    <BasicLayout>
      <Section title="基础使用">
        <List
          list={data}
          renderItem={(item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          )}
        />
      </Section>
      <Section title="下拉刷新">
        <List
          enablePullRefresh
          onRefresh={refresh}
          list={list}
          renderItem={(item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          )}
        />
      </Section>
      <Section title="下拉加载">
        <List
          enablePullRefresh
          enableLoadMore
          onRefresh={refresh}
          onLoadMore={loadMore}
          list={list}
          total={12}
          renderItem={(item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          )}
        />
      </Section>
      <Section title="全屏">
        <List
          full={full ? { customNavHeader: false } : undefined}
          enablePullRefresh
          enableLoadMore
          onRefresh={refresh}
          onLoadMore={loadMore}
          list={list}
          total={12}
          header={
            <Button
              onClick={() => {
                setFull(!full);
              }}
            >
              {full ? '关闭全屏' : '开启全屏'}
            </Button>
          }
          renderItem={(item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          )}
        />
      </Section>
      <Section title="使用useList进行单页数据加载">
        <List
          enablePullRefresh
          enableLoadMore
          onRefresh={singleList.refresh}
          onLoadMore={singleList.loadMore}
          list={singleList.list}
          total={singleList.total}
          renderItem={(item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          )}
        />
      </Section>
      <Section title="使用useList进行分页数据加载">
        <List
          enablePullRefresh
          enableLoadMore
          onRefresh={pageList.refresh}
          onLoadMore={pageList.loadMore}
          list={pageList.list}
          total={pageList.total}
          header={
            <Input
              style={{
                background: '#ffffff',
                position: 'sticky',
                top: 0,
                zIndex: 2,
              }}
              placeholder={'请输入'}
              onInput={(e) => {
                pageList.filterFunction({
                  searchKey: e.detail.value,
                });
              }}
            />
          }
          renderItem={(item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          )}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
