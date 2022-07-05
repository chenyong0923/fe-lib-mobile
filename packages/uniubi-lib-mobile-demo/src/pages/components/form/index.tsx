import { Input, Picker } from '@tarojs/components';
import React from 'react';
import { Button, Form } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [form] = Form.useForm();

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Form form={form}>
          <Form.Item
            label="姓名"
            name="name"
            initialValue="123"
            required
            trigger="onInput"
            valueFormat={(e) => e.detail.value}
          >
            <Input />
          </Form.Item>
          {/* <Form.Item label="性别" name="sex">
            <Picker mode="selector" range={['男', '女']} onChange={() => {}} />
          </Form.Item> */}
          <Form.Item>
            <Button
              onClick={() => {
                console.log(form.getFieldsValue());
              }}
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                form.setFieldsValue({ name: 'Hello' });
              }}
            >
              setFieldsValue
            </Button>
          </Form.Item>
        </Form>
      </Section>
    </BasicLayout>
  );
};

export default Page;
