import React, { useState } from 'react';
import { SearchBar } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import Tip from '@/components/Tip';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState<string>();

  return (
    <BasicLayout>
      <Section title="基础使用">
        <SearchBar placeholder="请输入" onChange={console.log} />
      </Section>
      <Section title="受控用法">
        <SearchBar
          placeholder="请输入"
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </Section>
      <Section title="取消按钮">
        <SearchBar placeholder="请输入" showCancelButton />
      </Section>
      <Section title="输入防抖">
        <Tip>默认开启防抖，防抖时间为500ms，允许关闭防抖</Tip>
        <SearchBar
          placeholder="请输入"
          onChange={console.log}
          duration={1000}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
