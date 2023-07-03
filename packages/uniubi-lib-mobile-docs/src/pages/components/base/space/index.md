# Space 间距

## 引入

```tsx
import { Space } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Space, Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Space>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </Space>
  );
};
```

### 自定义间距

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Space, Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Space size={40}>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </Space>
  );
};
```

### 对齐方式

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Space, Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Space align="start">
      <View>
        <View>
          <Tag>Tag</Tag>
        </View>
        <View>
          <Tag>Tag</Tag>
        </View>
      </View>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </Space>
  );
};
```

## API

| 参数名   | 说明     | 必填 | 类型                                         | 默认值     | 备注 |
| -------- | -------- | ---- | -------------------------------------------- | ---------- | ---- |
| chidlren | 子元素   | N    | `ReactNode`                                  |            |      |
| size     | 间距大小 | N    | `number`                                     | `16`       |      |
| align    | 对齐方式 | N    | `"start" \| "end" \| "center" \| "baseline"` | `"center"` |      |
