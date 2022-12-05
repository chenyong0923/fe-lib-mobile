# Input 输入框

## 引入

```tsx
import { Input } from "uniubi-lib-mobile";
```

## 使用指南

### 基础使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Input } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Input placeholder="请输入" />
    </View>
  );
};
```

### 受控用法

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Input } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<string>();

  return (
    <View>
      <Input
        placeholder="请输入"
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    </View>
  );
};
```

### 禁用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Input } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Input placeholder="请输入" disabled />
    </View>
  );
};
```

### 带边框的输入框

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Input } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Input placeholder="请输入" border />
    </View>
  );
};
```

### 前缀和后缀

```tsx
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { SearchOutlined } from "@uniubi/icons-taro";
import React from "react";
import { Input, Button } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Input placeholder="请输入" prefix={<SearchOutlined />} />
      <Input
        placeholder="请输入"
        suffix={
          <Button
            type="link"
            style={{ height: Taro.pxTransform(48), padding: 0 }}
          >
            发送验证码
          </Button>
        }
      />
    </View>
  );
};
```

### 密码输入框

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Input } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Input placeholder="请输入" password />
    </View>
  );
};
```

## API

| 参数名     | 说明                     | 必填 | 类型                        | 默认值  | 备注 |
| ---------- | ------------------------ | ---- | --------------------------- | ------- | ---- |
| prefix     | 前缀                     | N    | `ReactNode`                 |         |      |
| suffix     | 后缀                     | N    | `ReactNode`                 |         |      |
| allowClear | 可以点击清除图标删除内容 | N    | `boolean`                   | `true`  |      |
| border     | 是否需要下边框           | N    | `boolean`                   | `false` |      |
| onChange   | 输入框内容变化时的回调   | N    | `(value?: string) => void;` |         |      |

其他 API 可参考 Taro [Input 组件](https://docs.taro.zone/docs/components/forms/input#inputprops)
