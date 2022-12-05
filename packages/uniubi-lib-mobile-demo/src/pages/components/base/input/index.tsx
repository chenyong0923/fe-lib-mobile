import Taro from '@tarojs/taro';
import { SearchOutlined } from '@uniubi/icons-taro';
import React, { useState } from 'react';
import { Button, Input } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState<string>();

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Input placeholder="请输入" />
      </Section>
      <Section title="受控用法">
        <Input
          placeholder="请输入"
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </Section>
      <Section title="禁用">
        <Input placeholder="请输入" disabled />
      </Section>
      <Section title="带边框的输入框">
        <Input placeholder="请输入" border />
      </Section>
      <Section title="前缀和后缀">
        <Input placeholder="请输入" prefix={<SearchOutlined />} />
        <Input
          placeholder="请输入"
          suffix={
            <Button
              type="link"
              style={{ height: Taro.pxTransform(48), padding: 0 }}
            >
              发送验证码
            </Button>
          }
        />
      </Section>
      <Section title="密码输入框">
        <Input placeholder="请输入" password />
      </Section>
    </BasicLayout>
  );
};

export default Page;
