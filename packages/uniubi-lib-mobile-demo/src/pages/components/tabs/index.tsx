import React from 'react';
import { Tabs } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基本用法">
        <Tabs>
          <Tabs.Pane tab="Tab 1" tabKey="1">
            111
          </Tabs.Pane>
          <Tabs.Pane tab="Tab 2" tabKey="2">
            222
          </Tabs.Pane>
          <Tabs.Pane tab="Tab 3" tabKey="3">
            333
          </Tabs.Pane>
        </Tabs>
      </Section>
    </BasicLayout>
  );
};

export default Page;
