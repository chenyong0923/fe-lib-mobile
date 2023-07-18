import { View } from '@tarojs/components';
import dayjs, { type Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { DatePicker } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [selected, setSelected] = useState<Dayjs>(dayjs().year(2000));

  return (
    <BasicLayout>
      <Section title="基础使用">
        <DatePicker
          type="year"
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>年选择器</View>
        </DatePicker>
        <DatePicker
          type="month"
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>月选择器</View>
        </DatePicker>
        <DatePicker
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>日期选择器</View>
        </DatePicker>
      </Section>
      <Section title="受控用法">
        <DatePicker
          type="year"
          value={selected}
          onOk={(v) => {
            console.log('selected', v);
            setSelected(v);
          }}
        >
          <View>年选择器</View>
        </DatePicker>
      </Section>
      <Section title="范围选择">
        <DatePicker.Range
          onOk={(v) => {
            console.log('selected', v);
          }}
        >
          <View>范围选择</View>
        </DatePicker.Range>
      </Section>
    </BasicLayout>
  );
};

export default Page;
