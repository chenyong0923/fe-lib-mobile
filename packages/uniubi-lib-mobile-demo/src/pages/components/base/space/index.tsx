import { View } from '@tarojs/components';
import React from 'react';
import { Space, Tag } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <Space>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
        </Space>
      </Section>
      <Section title="自定义间距">
        <Space size={40}>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
        </Space>
      </Section>
      <Section title="对齐方式">
        <Space align="start">
          <View>
            <View>
              <Tag>Tag</Tag>
            </View>
            <View>
              <Tag>Tag</Tag>
            </View>
          </View>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
        </Space>
      </Section>
    </BasicLayout>
  );
};

export default Page;
