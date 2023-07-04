import React, { useState } from 'react';
import { Switch } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Switch />
      </Section>
      <Section title="受控用法">
        <Switch
          checked={checked}
          onChange={(val) => {
            setChecked(val);
          }}
        />
      </Section>
      <Section title="描述文字">
        <Switch checkedLabel="开" uncheckedLabel="关" />
      </Section>
      <Section title="禁用">
        <Switch disabled />
      </Section>
    </BasicLayout>
  );
};

export default Page;
