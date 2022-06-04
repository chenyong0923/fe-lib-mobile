import { View } from '@tarojs/components';
import React, { useState } from 'react';
import { Button, Loading } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Loading />
        <Loading type="primary" />
      </Section>
      <Section title="加载文案">
        <Loading text="Loading..." />
        <Loading type="primary" text="Loading..." />
      </Section>
      <Section title="容器">
        <Button
          onClick={() => {
            setLoading(!loading);
          }}
        >
          Toggle
        </Button>
        <Loading type="primary" loading={loading}>
          <View style={{ padding: 20, backgroundColor: '#2228e0' }}>
            <View>这是一段文字</View>
            <View>这是一段文字</View>
          </View>
        </Loading>
      </Section>
    </BasicLayout>
  );
};

export default Page;
