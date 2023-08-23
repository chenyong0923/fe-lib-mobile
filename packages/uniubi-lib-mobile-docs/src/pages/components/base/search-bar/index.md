# SearchBar 搜索框

## 引入

```tsx
import { SearchBar } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from "react";
import { SearchBar } from "uniubi-lib-mobile";
import { View } from "@tarojs/components";

const App = () => {
  return (
    <View>
      <SearchBar placeholder="请输入" onChange={console.log} />
    </View>
  );
};

export default App;
```

### 受控用法

```tsx
import React, { useState } from "react";
import { SearchBar } from "uniubi-lib-mobile";
import { View } from "@tarojs/components";

const App = () => {
  const [value, setValue] = useState<string>();

  return (
    <View>
      <SearchBar
        placeholder="请输入"
        value={value}
        onChange={(val) => {
          setValue(val);
        }}
      />
    </View>
  );
};

export default App;
```

### 取消按钮

```tsx
import React, { useState } from "react";
import { SearchBar } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<string>();

  return (
    <View>
      <SearchBar placeholder="请输入" showCancelButton />
    </View>
  );
};

export default App;
```

### 输入防抖

> 默认开启防抖，防抖时间为 500ms，允许关闭防抖

```tsx
import React, { useState } from "react";
import { SearchBar } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<string>();

  return (
    <View>
      <SearchBar placeholder="请输入" onChange={console.log} duration={1000} />
    </View>
  );
};

export default App;
```

## API

| 参数名           | 说明                         | 必填 | 类型                       | 默认值               | 备注 |
| ---------------- | ---------------------------- | ---- | -------------------------- | -------------------- | ---- |
| value            | 输入值                       | N    | `string`                   |                      |      |
| icon             | 图标                         | N    | `React.ReactNode`          | `<SearchOutlined />` |      |
| placeholder      | 提示语                       | N    | `string`                   |                      |      |
| circle           | 是否为圆形输入框             | N    | `boolean`                  | `false`              |      |
| showCancelButton | 是否显示取消按钮             | N    | `boolean`                  | `false`              |      |
| clearOnCancel    | 点击取消按钮时是否清空输入框 | N    | `boolean`                  | `false`              |      |
| duration         | 防抖时间                     | N    | `false \| number`          | `500`                |      |
| onChange         | 值改变事件                   | N    | `(val?: string) => void`   |                      |      |
| onCancel         | 点击取消事件                 | N    | `(e: ITouchEvent) => void` |                      |      |
