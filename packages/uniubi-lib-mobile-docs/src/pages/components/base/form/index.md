# Form 表单

## 引入

```tsx
import { Form } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Form, Button, Input } from "uniubi-lib-mobile";

const App = () => {
  const [form] = Form.useForm();

  return (
    <View>
      <Form form={form}>
        <Form.Item
          label="姓名"
          name="name"
          initialValue="12345"
          trigger="onInput"
          validateTrigger="onInput"
          valueFormat={(e) => e}
          rules={[
            { required: true, message: "请输入姓名" },
            { max: 4, message: "最多4个字符" },
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
              form.setFieldsValue({ name: "Hello" });
            }}
          >
            setFieldsValue
          </Button>
          <Button
            onClick={async () => {
              const fields = await form.validateFields();
              console.log("fields", fields);
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
    </View>
  );
};
```

### 快速生成校验规则

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Form, Button, Input } from "uniubi-lib-mobile";

const App = () => {
  const [form] = Form.useForm();

  return (
    <View>
      <Form form={form}>
        <Form.Item
          label="姓名"
          name="name"
          trigger="onInput"
          validateTrigger="onInput"
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
    </View>
  );
};
```

### 自定义校验规则

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Form, Button, Input } from "uniubi-lib-mobile";

const App = () => {
  const [form] = Form.useForm();

  return (
    <View>
      <Form form={form}>
        <Form.Item
          label="姓名"
          name="name"
          trigger="onInput"
          validateTrigger="onInput"
          valueFormat={(e) => e.detail.value}
          rules={[
            {
              validator: (value) => {
                if (value === "123") {
                  throw new Error("出错了");
                } else if (value === "1234") {
                  throw new Error("又错了");
                }
                return true;
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </View>
  );
};
```

### 多级字段

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Form, Button, Input } from "uniubi-lib-mobile";

const App = () => {
  const [form] = Form.useForm();

  return (
    <View>
      <Form form={form}>
        <Form.Item
          label="姓名"
          name="name"
          trigger="onInput"
          validateTrigger="onInput"
          valueFormat={(e) => e}
          rules={[
            { required: true, message: "请输入姓名" },
            { max: 4, message: "最多4个字符" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="昵称"
          name={["profile", "nickname"]}
          trigger="onInput"
          validateTrigger="onInput"
          valueFormat={(e) => e}
          rules={[
            { required: true, message: "请输入昵称" },
            { min: 4, max: 10, message: "请输入4-10个字符" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="花名"
          name={["profile", "flowername"]}
          trigger="onInput"
          validateTrigger="onInput"
          valueFormat={(e) => e}
          rules={[
            { required: true, message: "请输入花名" },
            { min: 4, max: 10, message: "请输入4-10个字符" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item border={false}>
          <Button
            onClick={() => {
              form.setFieldsValue({
                name: "name",
                profile: { nickname: "nickname", flowername: "flowername" },
              });
            }}
          >
            setFieldsValue
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
    </View>
  );
};
```

### 调整布局

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Form, Button, Input } from "uniubi-lib-mobile";

const App = () => {
  const [form] = Form.useForm();

  return (
    <View>
      <Form form={form} layout="vertical">
        <Form.Item
          label="姓名"
          name="name"
          initialValue="12345"
          trigger="onInput"
          validateTrigger="onInput"
          valueFormat={(e) => e}
          rules={[
            { required: true, message: "请输入姓名" },
            { max: 4, message: "最多4个字符" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </View>
  );
};
```

## API

### Form

| 参数名 | 说明     | 必填 | 类型                         | 默认值         | 备注 |
| ------ | -------- | ---- | ---------------------------- | -------------- | ---- |
| layout | 表单布局 | N    | `'horizontal' \| 'vertical'` | `'horizontal'` |      |
| form   | 表单实例 | N    | `FormInstance`               |                |      |

### Form.Item

| 参数名          | 说明                        | 必填 | 类型                                                            | 默认值         | 备注                                                                                   |
| --------------- | --------------------------- | ---- | --------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------- |
| name            | 字段名                      | N    | `NamePathType`                                                  |                | `type NamePathType = string \| string[]`                                               |
| label           | 标签文本                    | N    | `ReactNode`                                                     |                |                                                                                        |
| labelWidth      | 标签宽度                    | N    | `number`                                                        | `110`          | 单位 rpx                                                                               |
| layout          | 布局                        | N    | `'horizontal' \| 'vertical'`                                    | `'horizontal'` |                                                                                        |
| border          | 是否需要下边框              | N    | `boolean`                                                       | `true`         |                                                                                        |
| initialValue    | 初始值                      | N    | `any`                                                           |                | 重置时会回到这个值                                                                     |
| rules           | 校验规则                    | N    | `Rule[] \| Omit<Rule, 'message'>`                               |                | 当传入一个对象时，组件会预设一些提示文案，如果不符合需求可采用数组形式自行定制 message |
| required        | 是否必填                    | N    | `boolean`                                                       | `false`        | 如果这个值为 `true`, rules 中没有必填规则会自动补充                                    |
| valueKey        | 插入组件控制 value 的字段名 | N    | `'value'`                                                       |                | 比如说 Input 组件的 value 的字段名就是 `value`                                         |
| trigger         | 值变化的事件                | N    | `string`                                                        | `onChange`     | 比如 Input 组件是 `onInput`                                                            |
| validateTrigger | 校验事件                    | N    | `string`                                                        | `onChange`     |                                                                                        |
| valueFormat     | 格式化值变化                | N    | `(value: any, name: string, formInstance: FormInstance) => any` |                |                                                                                        |

### FormInstance

| 参数名         | 说明                                 | 类型                                              |
| -------------- | ------------------------------------ | ------------------------------------------------- |
| getFieldValue  | 获取某一字段的值                     | `(name: NamePathType) => any`                     |
| getFieldsValue | 获取所有字段的值                     | `() => Values`                                    |
| setFieldValue  | 设置某一字段的值                     | `(name: NamePathType, value: any) => void`        |
| setFieldsValue | 批量设置字段的值                     | `(values: Record<string, any>) => void`           |
| validateFields | 校验字段，默认定位到第一个错误的字段 | `(pos?: boolean) => Promise<Record<string, any>>` |
| resetFields    | 重置字段至初始值                     | `() => void`                                      |

### Rule

| 参数名    | 说明           | 必填 | 类型                    | 默认值 | 备注                                          |
| --------- | -------------- | ---- | ----------------------- | ------ | --------------------------------------------- |
| required  | 是否必需       | N    | `boolean`               |        |                                               |
| min       | 最小值         | N    | `number`                |        |                                               |
| max       | 最大值         | N    | `number`                |        |                                               |
| pattern   | 正则校验规则   | N    | `RegExp`                |        |                                               |
| validator | 自定义校验方法 | N    | `(val: any) => boolean` |        | 校验出错时要抛出错误 `throw new Error('xxx')` |
| message   | 错误提示文字   | N    | `string`                |        |                                               |

### Hooks

#### Form.useForm()

`type Form.useForm = (): [FormInstance]`

创建 Form 实例，用于管理所有数据状态。
