import React, { useState } from 'react';
import { Tabs } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

import styles from './index.module.less';

const Page = () => {
  const [activeKey, setActiveKey] = useState<string>('1');

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
      <Section title="选项过多时滚动">
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
          <Tabs.Pane tab="Tab 4Tab 4Tab 4Tab 4Tab 4" tabKey="4">
            444
          </Tabs.Pane>
          <Tabs.Pane tab="Tab 5Tab 5Tab 5Tab 5" tabKey="5">
            555
          </Tabs.Pane>
        </Tabs>
      </Section>
      <Section title="受控用法">
        <Tabs
          activeKey={activeKey}
          onChange={(val) => {
            setActiveKey(val);
          }}
        >
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
      <Section title="无下划线">
        <Tabs line={false}>
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
      <Section title="纵向布局">
        <Tabs layout="vertical" className={styles['layout-vertical']}>
          <Tabs.Pane tab="Tab 1" tabKey="1">
            111
          </Tabs.Pane>
          <Tabs.Pane tab="Tab 2" tabKey="2">
            222
          </Tabs.Pane>
          <Tabs.Pane tab="Tab 3" tabKey="3">
            333
          </Tabs.Pane>
          <Tabs.Pane tab="Tab 4" tabKey="4">
            444
          </Tabs.Pane>
          <Tabs.Pane tab="Tab 5" tabKey="5">
            444
          </Tabs.Pane>
        </Tabs>
      </Section>
    </BasicLayout>
  );
};

export default Page;
