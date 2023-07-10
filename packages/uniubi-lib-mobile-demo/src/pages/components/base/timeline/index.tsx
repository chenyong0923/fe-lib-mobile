import {
  AggregateOutlined,
  LabelOutlined,
  RemoveOutlined,
} from '@uniubi/icons-taro';
import React from 'react';
import { Timeline } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <Timeline>
          <Timeline.Item title="111" content="content" />
          <Timeline.Item title="222" content="content" />
          <Timeline.Item title="333" content="content" />
        </Timeline>
      </Section>
      <Section title="自定义 icon">
        <Timeline>
          <Timeline.Item title="111" icon={<AggregateOutlined />} />
          <Timeline.Item title="222" icon={<LabelOutlined />} />
          <Timeline.Item title="333" icon={<RemoveOutlined />} />
        </Timeline>
      </Section>
    </BasicLayout>
  );
};

export default Page;
