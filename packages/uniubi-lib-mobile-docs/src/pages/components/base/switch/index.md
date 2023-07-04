# Switch 开关

## 引入

```tsx
import { Switch } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Switch } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Switch />
    </View>
  );
};
```

### 受控用法

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Switch } from "uniubi-lib-mobile";

const App = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View>
      <Switch
        checked={checked}
        onChange={(val) => {
          setChecked(val);
        }}
      />
    </View>
  );
};
```

### 描述文字

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Switch } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Switch checkedLabel="开" uncheckedLabel="关" />
    </View>
  );
};
```

### 禁用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Switch } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Switch disabled />
    </View>
  );
};
```

## API

| 参数名         | 说明             | 必填 | 类型                         | 默认值  | 备注 |
| -------------- | ---------------- | ---- | ---------------------------- | ------- | ---- |
| defaultChecked | 默认选中状态     | N    | `boolean`                    |         |      |
| checked        | 选中状态         | N    | `boolean`                    |         |      |
| disabled       | 是否禁用         | N    | `boolean`                    | `false` |      |
| checkedLabel   | 选中提示         | N    | `ReactNode`                  |         |      |
| uncheckedLabel | 未选中提示       | N    | `ReactNode`                  |         |      |
| onChange       | 选中状态切换回调 | N    | `(checked: boolean) => void` |         |      |
