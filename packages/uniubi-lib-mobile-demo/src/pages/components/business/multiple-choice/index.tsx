import React, { useState } from 'react';
import { MultipleChoice } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();

  const questions = [
    {
      id: 1,
      question: '不要在你家里放一件你不知其用，或你认为不美的东西',
      options: [
        { label: '这里是选项1', value: 1 },
        { label: '这里是选项2', value: 2 },
        { label: '这里是选项3', value: 3 },
        { label: '这里是选项4', value: 4 },
      ],
      multiple: false,
    },
    {
      id: 2,
      question: '不要在你家里放一件你不知其用，或你认为不美的东西',
      options: [
        { label: '这里是选项1', value: 1 },
        { label: '这里是选项2', value: 2 },
        { label: '这里是选项3', value: 3 },
        { label: '这里是选项4', value: 4 },
      ],
      multiple: true,
    },
    {
      id: 3,
      question: '不要在你家里放一件你不知其用，或你认为不美的东西',
      options: [
        { label: '这里是选项1', value: 1 },
        { label: '这里是选项2', value: 2 },
        { label: '这里是选项3', value: 3 },
        { label: '这里是选项4', value: 4 },
      ],
      multiple: false,
    },
  ];

  return (
    <BasicLayout>
      <Section title="单选">
        <MultipleChoice
          question="不要在你家里放一件你不知其用，或你认为不美的东西"
          options={[
            { label: '这里是选项1', value: 1 },
            { label: '这里是选项2', value: 2 },
            { label: '这里是选项3', value: 3 },
            { label: '这里是选项4', value: 4 },
          ]}
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      </Section>
      <Section title="多选">
        <MultipleChoice
          question="不要在你家里放一件你不知其用，或你认为不美的东西"
          options={[
            { label: '这里是选项1', value: 1 },
            { label: '这里是选项2', value: 2 },
            { label: '这里是选项3', value: 3 },
            { label: '这里是选项4', value: 4 },
          ]}
          value={value2}
          onChange={(val) => {
            setValue2(val);
          }}
          multiple
        />
      </Section>
      <Section title="修改选项序号">
        <MultipleChoice
          question="不要在你家里放一件你不知其用，或你认为不美的东西"
          options={[
            { label: '这里是选项1', value: 1 },
            { label: '这里是选项2', value: 2 },
            { label: '这里是选项3', value: 3 },
            { label: '这里是选项4', value: 4 },
          ]}
          value={value3}
          onChange={(val) => {
            setValue3(val);
          }}
          signs={Array.from({ length: 4 }).map((_, index) => index + 1)}
        />
      </Section>
      <Section title="选择组">
        <MultipleChoice.Group
          value={value4}
          onChange={(val) => {
            setValue4(val);
          }}
        >
          {questions.map((item) => (
            <MultipleChoice
              key={item.id}
              question={item.question}
              options={item.options}
              multiple={item.multiple}
            />
          ))}
        </MultipleChoice.Group>
      </Section>
    </BasicLayout>
  );
};

export default Page;
