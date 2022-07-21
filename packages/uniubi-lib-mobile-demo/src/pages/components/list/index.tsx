import { View } from '@tarojs/components';
import React from 'react';
import { List } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const loadList = async ({ page = 1, pageSize = 10 }) => {
    const list: any[] = [];
    for (let i = 0; i < pageSize * page; i++) {
      list.push({ id: i, name: `i-${i}` });
    }
    return { total: 100, list };
  };
  return (
    <BasicLayout>
      <Section title="基础使用">
        <List
          loadList={loadList}
          renderItem={(item) => <View key={item.id}>{item.name}</View>}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
