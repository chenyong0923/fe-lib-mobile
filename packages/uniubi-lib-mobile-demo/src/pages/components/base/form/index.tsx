import { View } from '@tarojs/components';
import React, { Fragment } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Switch,
} from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [form3] = Form.useForm();
  const [form4] = Form.useForm();
  const [form5] = Form.useForm();
  const [form6] = Form.useForm();

  const name = Form.useWatch('name', form5);

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Form form={form}>
          <Form.Item
            label="姓名"
            name="name"
            initialValue="kunkun"
            rules={[
              { required: true, message: '请输入姓名' },
              { min: 4, max: 10, message: '请输入4-10个字符' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="性别" name="gender">
            <Radio.Group>
              <Radio value={1}>男</Radio>
              <Radio value={2}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="爱好" name="hobby">
            <Checkbox.Group>
              <Checkbox value="sing">唱</Checkbox>
              <Checkbox value="dance">跳</Checkbox>
              <Checkbox value="rap">Rap</Checkbox>
              <Checkbox value="basketball">篮球</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item label="打call" name="isCall">
            <Switch />
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
                console.log(form4.getFieldsValue());
              }}
            >
              Submit
            </Button>
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
        <Form layout="vertical">
          <Form.Item
            label="姓名"
            name="name"
            initialValue="12345"
            rules={[
              { required: true, message: '请输入姓名' },
              { min: 4, max: 10, message: '请输入4-10个字符' },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Section>
      <Section title="监听字段">
        <Form form={form5}>
          <Form.Item label="姓名" name="name">
            <Input />
          </Form.Item>
          <View>{name}</View>
        </Form>
      </Section>
      <Section title="列表">
        <Form form={form6}>
          <Form.Item label="姓名" name="name" initialValue="kunkun">
            <Input />
          </Form.Item>
          <Form.List name="group">
            {(fields, { add, remove }) => {
              return (
                <View>
                  {fields.map((field) => (
                    <Fragment>
                      <Form.Item
                        {...field}
                        label="粉丝"
                        name={[field.name, 'fans']}
                        rules={[{ required: true, message: '请输入粉丝' }]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="年龄"
                        name={[field.name, 'age']}
                      >
                        <Input />
                      </Form.Item>
                    </Fragment>
                  ))}
                  <Button
                    onClick={() => {
                      add({ fans: undefined, age: undefined });
                    }}
                  >
                    add
                  </Button>
                  <Button
                    onClick={() => {
                      remove(0);
                    }}
                  >
                    remove first
                  </Button>
                </View>
              );
            }}
          </Form.List>
          <Form.Item label="按钮" border={false}>
            <Button
              onClick={() => {
                console.log(form6.getFieldsValue());
              }}
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                form6.setFieldsValue({
                  group: [
                    { fans: 'ikun', age: 22 },
                    { fans: '小黑子', age: 20 },
                  ],
                });
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
