import { Input } from '@tarojs/components';
import React from 'react';
import { Button, Form } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Form form={form}>
          <Form.Item
            label="姓名"
            name="name"
            initialValue="12345"
            trigger="onInput"
            validateTrigger="onInput"
            valueFormat={(e) => e.detail.value}
            rules={[
              { required: true, message: '请输入姓名' },
              { min: 4, max: 10, message: '请输入4-10个字符' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="花名"
            name="nickname"
            trigger="onInput"
            validateTrigger="onInput"
            valueFormat={(e) => e.detail.value}
            layout="vertical"
          >
            <Input />
          </Form.Item>
          <Form.Item border={false}>
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
      <Section title="快速生成校验规则">
        <Form form={form2}>
          <Form.Item
            label="姓名"
            name="name"
            initialValue="12345"
            trigger="onInput"
            validateTrigger="onInput"
            valueFormat={(e) => e.detail.value}
            rules={{
              required: true,
              min: 4,
              max: 10,
            }}
          >
            <Input />
          </Form.Item>
        </Form>
      </Section>
    </BasicLayout>
  );
};

export default Page;
