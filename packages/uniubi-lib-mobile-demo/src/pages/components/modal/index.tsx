import React, { useState } from 'react';
import { Button, Modal } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);
  const [visible3, setVisible3] = useState<boolean>(false);

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          打开弹窗
        </Button>
        <Modal
          visible={visible}
          title="标题"
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        >
          Modal
        </Modal>
      </Section>
      <Section title="圆形按钮">
        <Button
          onClick={() => {
            setVisible2(true);
          }}
        >
          打开弹窗
        </Button>
        <Modal
          visible={visible2}
          title="标题"
          onOk={() => {
            setVisible2(false);
          }}
          onCancel={() => {
            setVisible2(false);
          }}
          roundButton
        >
          Modal
        </Modal>
      </Section>
      <Section title="自定义 footer">
        <Button
          onClick={() => {
            setVisible3(true);
          }}
        >
          打开弹窗
        </Button>
        <Modal
          visible={visible3}
          title="标题"
          onOk={() => {
            setVisible3(false);
          }}
          onCancel={() => {
            setVisible3(false);
          }}
          footer={null}
        >
          Modal
        </Modal>
      </Section>
    </BasicLayout>
  );
};

export default Page;
