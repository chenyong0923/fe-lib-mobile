# Radio 单选

## 引入

```tsx
import { Radio } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Radio } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Radio checked>男</Radio>
      <Radio>女</Radio>
    </View>
  );
};
```

### 单选组合

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Radio } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<number>(1);

  return (
    <View>
      <Radio.Group
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      >
        <Radio value={1}>男</Radio>
        <Radio value={2}>女</Radio>
      </Radio.Group>
    </View>
  );
};
```

### 修改位置

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Radio } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Radio checked iconPlacement="right">
        男
      </Radio>
      <Radio iconPlacement="right">女</Radio>
    </View>
  );
};
```

### 修改图标

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Radio } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Radio checked iconMode="outlined">
        男
      </Radio>
      <Radio iconMode="outlined">女</Radio>
    </View>
  );
};
```

### 增加描述

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Radio } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Radio checked desc="男性">
        男
      </Radio>
      <Radio desc="女性">女</Radio>
    </View>
  );
};
```

### 禁用

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Radio } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<number>(1);

  return (
    <View>
      <Radio.Group
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
        disabled
      >
        <Radio value={1}>男</Radio>
        <Radio value={2}>女</Radio>
      </Radio.Group>
    </View>
  );
};
```

## API

| 参数名        | 说明           | 必填 | 类型                       | 默认值     | 备注 |
| ------------- | -------------- | ---- | -------------------------- | ---------- | ---- |
| checked       | 是否选中       | N    | `boolean`                  | `false`    |      |
| disabled      | 是否禁用       | N    | `boolean`                  | `false`    |      |
| value         | 单选项绑定的值 | N    | `any`                      |            |      |
| onChange      | 值改变回调事件 | N    | `(value: any) => void`     |            |      |
| iconPlacement | icon 位置      | N    | `'left' \| 'right'`        | `'left'`   |      |
| iconMode      | icon 样式      | N    | `'outlined' \| 'filled'`   | `'filled'` |      |
| desc          | 单选项描述文字 | N    | `string`                   |            |      |
| onClick       | 点击事件回调   | N    | `(e: ITouchEvent) => void` |            |      |

### Radio.Group

| 参数名   | 说明           | 必填 | 类型                   | 默认值  | 备注 |
| -------- | -------------- | ---- | ---------------------- | ------- | ---- |
| disabled | 是否禁用       | N    | `boolean`              | `false` |      |
| value    | 单选项绑定的值 | N    | `any`                  |         |      |
| onChange | 值改变回调事件 | N    | `(value: any) => void` |         |      |
