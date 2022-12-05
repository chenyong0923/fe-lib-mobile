import React, { useState } from 'react';
import { Radio } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState<number>(1);
  const [value2, setValue2] = useState<number>(1);

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Radio checked>男</Radio>
        <Radio>女</Radio>
      </Section>
      <Section title="单选组合">
        <Radio.Group
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        >
          <Radio value={1}>男</Radio>
          <Radio value={2}>女</Radio>
        </Radio.Group>
      </Section>
      <Section title="修改位置">
        <Radio checked iconPlacement="right">
          男
        </Radio>
        <Radio iconPlacement="right">女</Radio>
      </Section>
      <Section title="修改图标">
        <Radio checked iconMode="outlined">
          男
        </Radio>
        <Radio iconMode="outlined">女</Radio>
      </Section>
      <Section title="增加描述">
        <Radio checked desc="男性">
          男
        </Radio>
        <Radio desc="女性">女</Radio>
      </Section>
      <Section title="禁用">
        <Radio.Group
          value={value2}
          onChange={(val) => {
            setValue2(val);
          }}
          disabled
        >
          <Radio value={1}>男</Radio>
          <Radio value={2}>女</Radio>
        </Radio.Group>
      </Section>
    </BasicLayout>
  );
};

export default Page;
