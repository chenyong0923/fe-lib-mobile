import React, { useState } from 'react';
import { ActionSheet, Button } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          打开动作面板
        </Button>
        <ActionSheet
          visible={visible}
          actions={[{ name: '选项1' }, { name: '选项2' }]}
          onClose={() => {
            setVisible(false);
          }}
        />
      </Section>
      <Section title="需要取消按钮">
        <Button
          onClick={() => {
            setVisible2(true);
          }}
        >
          打开动作面板
        </Button>
        <ActionSheet
          visible={visible2}
          actions={[{ name: '选项1' }, { name: '选项2' }]}
          onClose={() => {
            setVisible2(false);
          }}
          onCancel={() => {
            console.log('cancel');
          }}
        />
      </Section>
      <Section title="操作项状态">
        <Button
          onClick={() => {
            setVisible3(true);
          }}
        >
          打开动作面板
        </Button>
        <ActionSheet
          visible={visible3}
          actions={[
            { name: '选项1' },
            { name: '选项2', disabled: true },
            { name: '选项3', danger: true },
          ]}
          onClose={() => {
            setVisible3(false);
          }}
          onCancel={() => {
            console.log('cancel');
          }}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
