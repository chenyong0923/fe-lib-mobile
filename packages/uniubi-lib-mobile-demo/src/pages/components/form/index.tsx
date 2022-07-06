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
            trigger="onInput"
            validateTrigger="onInput"
            valueFormat={(e) => e.detail.value}
            rules={[
              { required: true, message: '请输入姓名' },
              { max: 4, message: '最多4个字符' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="性别" name="sex">
            <Picker mode="selector" range={['男', '女']} onChange={() => {}}>
              选中
            </Picker>
          </Form.Item>
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
            <Button
              onClick={async () => {
                const fields = await form.validateFields();
                console.log('fields', fields);
              }}
            >
              validateFields
            </Button>
            <Button
              onClick={() => {
                form.resetFields();
              }}
            >
              resetFields
            </Button>
          </Form.Item>
        </Form>
      </Section>
    </BasicLayout>
  );
};

export default Page;
