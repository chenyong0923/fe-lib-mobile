import React from 'react';
import { Button, Form, Input, Radio } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [form4] = Form.useForm();

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Form form={form}>
          <Form.Item
            label="姓名"
            name="name"
            initialValue="12345"
            valueFormat={(e) => e}
            rules={[
              { required: true, message: '请输入姓名' },
              { min: 4, max: 10, message: '请输入4-10个字符' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="性别" name="gender" valueFormat={(e) => e}>
            <Radio.Group>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="按钮" border={false}>
            <Button
              onClick={() => {
                console.log(form.getFieldsValue());
              }}
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                form.setFieldsValue({ name: 'name' });
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
            valueFormat={(e) => e}
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

      <Section title="自定义校验规则">
        <Form form={form3}>
          <Form.Item
            label="姓名"
            name="name"
            valueFormat={(e) => e}
            rules={[
              {
                validator: (value) => {
                  if (value === '123') {
                    throw new Error('出错了');
                  } else if (value === '1234') {
                    throw new Error('又错了');
                  }
                  return true;
                },
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Section>
      <Section title="多级字段">
        <Form form={form4}>
          <Form.Item
            label="姓名"
            name="name"
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
          <Form.Item
            label="昵称"
            name={['profile', 'nickname']}
            valueFormat={(e) => e}
            rules={[
              { required: true, message: '请输入昵称' },
              { min: 4, max: 10, message: '请输入4-10个字符' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="花名"
            name={['profile', 'flowername']}
            valueFormat={(e) => e}
            rules={[
              { required: true, message: '请输入花名' },
              { min: 4, max: 10, message: '请输入4-10个字符' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item border={false}>
            <Button
              onClick={() => {
                form4.setFieldsValue({
                  name: 'name',
                  profile: { nickname: 'nickname', flowername: 'flowername' },
                });
              }}
            >
              setFieldsValue
            </Button>
            <Button
              onClick={() => {
                form4.resetFields();
              }}
            >
              resetFields
            </Button>
          </Form.Item>
        </Form>
      </Section>
      <Section title="调整布局">
        <Form form={form} layout="vertical">
          <Form.Item
            label="姓名"
            name="name"
            initialValue="12345"
            valueFormat={(e) => e}
            rules={[
              { required: true, message: '请输入姓名' },
              { min: 4, max: 10, message: '请输入4-10个字符' },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Section>
    </BasicLayout>
  );
};

export default Page;
