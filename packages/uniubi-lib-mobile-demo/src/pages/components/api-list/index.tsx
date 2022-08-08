import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { ApiList, Button } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [full, setFull] = useState<boolean>(false);
  const loadApi = async () => {
    const resp: any = await new Promise((resolve) => {
      setTimeout(() => {
        const data: any = [];
        for (let i = 0; i < 20; i++) {
          const id = i + 1;
          data.push({ id, name: `id: ${id}` });
        }
        resolve({ data });
      }, 1000);
    });
    return resp || {};
  };

  const loadPageApi = async ({ page, pageSize }) => {
    const resp: any = await new Promise((resolve) => {
      setTimeout(() => {
        const data: any = [];
        for (let i = 0; i < pageSize; i++) {
          const id = (page - 1) * pageSize + i + 1;
          data.push({ id, name: `id: ${id}` });
        }
        resolve({ data: { list: data, total: 30 } });
      }, 1000);
    });
    return resp || {};
  };
  return (
    <BasicLayout>
      <Section title="基础使用">
        <ApiList
          full={full ? { customNavHeader: false } : undefined}
          enablePullRefresh
          enableEndTip
          loadListApi={loadApi}
          responseListKey={'data'}
          renderItem={(item) => (
            <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
              {item.name}
            </View>
          )}
        />
      </Section>
      <Section title="分页列表">
        <ApiList
          full={full ? { customNavHeader: false } : undefined}
          enablePullRefresh
          enableEndTip
          loadListApi={loadPageApi}
          requestPageKey={'page'}
          requestPageSizeKey={'pageSize'}
          responseTotalKey={['data', 'total']}
          responseListKey={['data', 'list']}
          pageSize={10}
          renderHeader={
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
    </BasicLayout>
  );
};

export default Page;
