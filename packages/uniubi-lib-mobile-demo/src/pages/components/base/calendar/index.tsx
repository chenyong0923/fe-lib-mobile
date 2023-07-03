import { Text } from '@tarojs/components';
import dayjs, { type Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { Calendar } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState<Dayjs>(dayjs());
  const [value2, setValue2] = useState<Dayjs>(dayjs());
  const [range, setRange] = useState<[Dayjs, Dayjs]>([
    dayjs().subtract(1, 'day'),
    dayjs().add(1, 'day'),
  ]);
  const [month, setMonth] = useState<string>(dayjs().format('YYYY-MM'));
  const [year, setYear] = useState<string>(dayjs().format('YYYY'));

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Calendar
          value={value}
          onChange={(date) => {
            setValue(date);
          }}
        />
      </Section>
      <Section title="可选范围">
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
      <Section title="渲染自定义内容">
        <Calendar
          dateRender={(date) => {
            if (date.valueOf() === dayjs().startOf('day').valueOf()) {
              return <Text>今</Text>;
            }
            return null;
          }}
        />
      </Section>
      <Section title="不同类型">
        <Calendar
          type="month"
          value={month}
          onChange={(v) => {
            setMonth(v);
          }}
        />
        <Calendar
          type="year"
          value={year}
          onChange={(v) => {
            setYear(v);
          }}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
