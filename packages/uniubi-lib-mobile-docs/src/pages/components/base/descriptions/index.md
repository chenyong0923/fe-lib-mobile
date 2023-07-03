# Descriptions 描述列表

## 引入

```tsx
import { Descriptions } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from "react";
import { Descriptions } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Descriptions>
      <Descriptions.Item label="姓名" span={12}>
        张三
      </Descriptions.Item>
      <Descriptions.Item label="年龄" span={12}>
        20
      </Descriptions.Item>
      <Descriptions.Item label="性别" span={12}>
        男
      </Descriptions.Item>
      <Descriptions.Item label="爱好" span={12}>
        女
      </Descriptions.Item>
      <Descriptions.Item label="邮箱">zhangsan@uni-ubi.com</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

### 纵向布局

```tsx
import React from "react";
import { Descriptions } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Descriptions layout="vertical">
      <Descriptions.Item label="姓名" span={12}>
        张三
      </Descriptions.Item>
      <Descriptions.Item label="年龄" span={12}>
        20
      </Descriptions.Item>
      <Descriptions.Item label="性别" span={12}>
        男
      </Descriptions.Item>
      <Descriptions.Item label="爱好" span={12}>
        女
      </Descriptions.Item>
      <Descriptions.Item label="邮箱">zhangsan@uni-ubi.com</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

### 不使用冒号

```tsx
import React from "react";
import { Descriptions } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Descriptions colon={false}>
      <Descriptions.Item label="姓名" span={12}>
        张三
      </Descriptions.Item>
      <Descriptions.Item label="年龄" span={12}>
        20
      </Descriptions.Item>
      <Descriptions.Item label="性别" span={12}>
        男
      </Descriptions.Item>
      <Descriptions.Item label="爱好" span={12}>
        女
      </Descriptions.Item>
      <Descriptions.Item label="邮箱">zhangsan@uni-ubi.com</Descriptions.Item>
    </Descriptions>
  );
};

export default App;
```

## API

| 参数名   | 说明         | 必填 | 类型                         | 默认值         | 备注                       |
| -------- | ------------ | ---- | ---------------------------- | -------------- | -------------------------- |
| children | 子元素       | N    | `ReactNode`                  |                | 只接收 `Descriptions.Item` |
| layout   | 布局方式     | N    | `"horizontal" \| "vertical"` | `"horizontal"` |                            |
| colon    | 是否使用冒号 | N    | `boolean`                    | `true`         | 纵向布局时，默认不使用冒号 |

## Item

| 参数名   | 说明         | 必填 | 类型        | 默认值 | 备注       |
| -------- | ------------ | ---- | ----------- | ------ | ---------- |
| children | 子元素       | N    | `ReactNode` |        |            |
| label    | 布局方式     | Y    | `string`    |        |            |
| span     | 包含列的数量 | N    | `number`    | `24`   | 同栅格布局 |
