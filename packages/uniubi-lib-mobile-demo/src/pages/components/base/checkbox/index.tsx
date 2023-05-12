import React, { useState } from 'react';
import { Checkbox } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState<string[]>([]);
  const [value2, setValue2] = useState<string[]>(['sing']);

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Checkbox checked value="sing" desc="描述描述描述描述">
          唱
        </Checkbox>
        <Checkbox value="dance" desc="描述描述描述描述">
          跳
        </Checkbox>
        <Checkbox value="rap" desc="描述描述描述描述">
          Rap
        </Checkbox>
        <Checkbox value="basketball" desc="描述描述描述描述">
          篮球
        </Checkbox>
      </Section>
      <Section title="多选组">
        <Checkbox.Group
          value={value}
          onChange={(v) => {
            setValue(v);
          }}
        >
          <Checkbox value="sing">唱</Checkbox>
          <Checkbox value="dance">跳</Checkbox>
          <Checkbox value="rap">Rap</Checkbox>
          <Checkbox value="basketball">篮球</Checkbox>
        </Checkbox.Group>
      </Section>

      <Section title="禁用">
        <Checkbox.Group
          value={value2}
          onChange={(v) => {
            setValue2(v);
          }}
        >
          <Checkbox value="sing">唱</Checkbox>
          <Checkbox value="dance">跳</Checkbox>
          <Checkbox value="rap">Rap</Checkbox>
          <Checkbox value="basketball" disabled>
            篮球
          </Checkbox>
        </Checkbox.Group>
      </Section>
    </BasicLayout>
  );
};

export default Page;
