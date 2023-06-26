import { UserOutlined } from '@uniubi/icons-taro';
import React from 'react';
import { Tag } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <Tag size="small">Tag</Tag>
        <Tag>Tag</Tag>
        <Tag size="large">Tag</Tag>
      </Section>
      <Section title="圆形">
        <Tag size="small" round>
          Tag
        </Tag>
        <Tag round>Tag</Tag>
        <Tag size="large" round>
          Tag
        </Tag>
      </Section>
      <Section title="预设颜色">
        <Tag color="success">Tag</Tag>
        <Tag color="processing">Tag</Tag>
        <Tag color="warning">Tag</Tag>
        <Tag color="error">Tag</Tag>
      </Section>
      <Section title="自定义颜色">
        <Tag color="#f50">Tag</Tag>
        <Tag color="#2db7f5">Tag</Tag>
        <Tag color="#87d068">Tag</Tag>
        <Tag color="#108ee9">Tag</Tag>
      </Section>
      <Section title="不需要边框">
        <Tag color="success" border={false}>
          Tag
        </Tag>
        <Tag color="processing" border={false}>
          Tag
        </Tag>
        <Tag color="warning" border={false}>
          Tag
        </Tag>
        <Tag color="error" border={false}>
          Tag
        </Tag>
      </Section>
      <Section title="颜色填充型">
        <Tag color="success" fill>
          Tag
        </Tag>
        <Tag color="processing" fill>
          Tag
        </Tag>
        <Tag color="warning" fill>
          Tag
        </Tag>
        <Tag color="error" fill>
          Tag
        </Tag>
      </Section>
      <Section title="icon">
        <Tag icon={<UserOutlined />}>Tag</Tag>
      </Section>
      <Section title="可关闭">
        <Tag
          closable
          onClose={() => {
            console.log('close');
          }}
        >
          Tag
        </Tag>
      </Section>
    </BasicLayout>
  );
};

export default Page;
