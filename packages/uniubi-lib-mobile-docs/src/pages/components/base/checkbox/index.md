# Checkbox 多选

## 引入

```tsx
import { Checkbox } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Checkbox } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Checkbox checked value="sing" desc="描述描述描述描述">
        唱
      </Checkbox>
      <Checkbox value="dance" desc="描述描述描述描述">
        跳
      </Checkbox>
      <Checkbox value="rap" desc="描述描述描述描述">
        Rap
      </Checkbox>
      <Checkbox value="basketball" desc="描述描述描述描述">
        篮球
      </Checkbox>
    </View>
  );
};
```

### 多选组

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Checkbox } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <View>
      <Checkbox.Group
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      >
        <Checkbox value="sing">唱</Checkbox>
        <Checkbox value="dance">跳</Checkbox>
        <Checkbox value="rap">Rap</Checkbox>
        <Checkbox value="basketball">篮球</Checkbox>
      </Checkbox.Group>
    </View>
  );
};
```

### 禁用

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Checkbox } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <View>
      <Checkbox.Group
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      >
        <Checkbox value="sing">唱</Checkbox>
        <Checkbox value="dance">跳</Checkbox>
        <Checkbox value="rap">Rap</Checkbox>
        <Checkbox value="basketball" disabled>
          篮球
        </Checkbox>
      </Checkbox.Group>
    </View>
  );
};
```

## API

| 参数名   | 说明           | 必填 | 类型                       | 默认值  | 备注 |
| -------- | -------------- | ---- | -------------------------- | ------- | ---- |
| checked  | 是否选中       | N    | `boolean`                  | `false` |      |
| disabled | 是否禁用       | N    | `boolean`                  |         |      |
| value    | 多选项绑定的值 | N    | `any`                      |         |      |
| onChange | 值改变回调事件 | N    | `(value: any) => void`     |         |      |
| desc     | 单选项描述文字 | N    | `string`                   |         |      |
| onClick  | 点击事件回调   | N    | `(e: ITouchEvent) => void` |         |      |

### Radio.Group

| 参数名   | 说明           | 必填 | 类型                   | 默认值  | 备注 |
| -------- | -------------- | ---- | ---------------------- | ------- | ---- |
| disabled | 是否禁用       | N    | `boolean`              | `false` |      |
| value    | 多选项绑定的值 | N    | `any`                  |         |      |
| onChange | 值改变回调事件 | N    | `(value: any) => void` |         |      |
