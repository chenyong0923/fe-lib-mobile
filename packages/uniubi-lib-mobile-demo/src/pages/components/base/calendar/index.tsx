import { Text } from '@tarojs/components';
import dayjs, { type Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { Calendar } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState<Dayjs>(dayjs());
  const [value2, setValue2] = useState<Dayjs>(dayjs());
  const [range, setRange] = useState<[Dayjs, Dayjs]>([] as any);

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Text>
          基础使用时，置灰非当前月份的日期，可以点击，点击后跳转至日期所在月
        </Text>
        <Calendar
          value={value}
          onChange={(date) => {
            setValue(date);
          }}
        />
      </Section>
      <Section title="可选范围">
        <Text>存在 min 或 max 时，置灰范围外的日期，不可点击</Text>
        <Calendar
          value={value2}
          onChange={(date) => {
            setValue2(date);
          }}
          min={dayjs().subtract(1, 'day')}
          max={dayjs().add(1, 'day')}
        />
      </Section>
      <Section title="选择时间段">
        <Calendar.Range
          value={range}
          onChange={(r) => {
            setRange(r);
          }}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
