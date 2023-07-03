import React from 'react';
import { Descriptions } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <Descriptions>
          <Descriptions.Item label="姓名" span={12}>
            张三
          </Descriptions.Item>
          <Descriptions.Item label="年龄" span={12}>
            20
          </Descriptions.Item>
          <Descriptions.Item label="性别" span={12}>
            男
          </Descriptions.Item>
          <Descriptions.Item label="爱好" span={12}>
            女
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">
            zhangsan@uni-ubi.com
          </Descriptions.Item>
        </Descriptions>
      </Section>
      <Section title="纵向布局">
        <Descriptions layout="vertical">
          <Descriptions.Item label="姓名" span={12}>
            张三
          </Descriptions.Item>
          <Descriptions.Item label="年龄" span={12}>
            20
          </Descriptions.Item>
          <Descriptions.Item label="性别" span={12}>
            男
          </Descriptions.Item>
          <Descriptions.Item label="爱好" span={12}>
            女
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">
            zhangsan@uni-ubi.com
          </Descriptions.Item>
        </Descriptions>
      </Section>
      <Section title="不使用冒号">
        <Descriptions colon={false}>
          <Descriptions.Item label="姓名" span={12}>
            张三
          </Descriptions.Item>
          <Descriptions.Item label="年龄" span={12}>
            20
          </Descriptions.Item>
          <Descriptions.Item label="性别" span={12}>
            男
          </Descriptions.Item>
          <Descriptions.Item label="爱好" span={12}>
            女
          </Descriptions.Item>
          <Descriptions.Item label="邮箱">
            zhangsan@uni-ubi.com
          </Descriptions.Item>
        </Descriptions>
      </Section>
    </BasicLayout>
  );
};

export default Page;
