import { View } from '@tarojs/components';
import dayjs, { type Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { TimePicker } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [selected, setSelected] = useState<Dayjs>(
    dayjs().hour(12).minute(0).second(0),
  );

  return (
    <BasicLayout>
      <Section title="基础使用">
        <TimePicker
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>时间选择器</View>
        </TimePicker>
      </Section>
      <Section title="受控用法">
        <TimePicker
          value={selected}
          onChange={(v) => {
            setSelected(v);
          }}
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>时间选择器</View>
        </TimePicker>
      </Section>
      <Section title="范围选择">
        <TimePicker.Range
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>范围选择</View>
        </TimePicker.Range>
      </Section>
    </BasicLayout>
  );
};

export default Page;
