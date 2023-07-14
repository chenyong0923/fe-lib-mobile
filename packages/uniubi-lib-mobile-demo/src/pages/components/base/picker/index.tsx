import { View } from '@tarojs/components';
import React, { useState } from 'react';
import { Picker } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState<string[]>(['1-2', '2-2']);

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Picker
          options={[
            [
              { label: '2-1', value: '2-1' },
              { label: '2-2', value: '2-2' },
            ],
          ]}
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>Picker</View>
        </Picker>
      </Section>
      <Section title="多列用法">
        <Picker
          options={[
            [
              { label: '1-1', value: '1-1' },
              { label: '1-2', value: '1-2' },
            ],
            [
              { label: '2-1', value: '2-1' },
              { label: '2-2', value: '2-2' },
            ],
          ]}
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>Picker</View>
        </Picker>
      </Section>
      <Section title="受控用法">
        <Picker
          options={[
            [
              { label: '1-1', value: '1-1' },
              { label: '1-2', value: '1-2' },
            ],
            [
              { label: '2-1', value: '2-1' },
              { label: '2-2', value: '2-2' },
            ],
          ]}
          value={value}
          onOk={(v) => {
            setValue(v);
          }}
        >
          <View>{value.join('/')}</View>
        </Picker>
      </Section>
    </BasicLayout>
  );
};

export default Page;
