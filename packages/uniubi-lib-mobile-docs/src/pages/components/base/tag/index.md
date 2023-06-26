# Tag 标签

## 引入

```tsx
import { Tag } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Tag size="small">Tag</Tag>
      <Tag>Tag</Tag>
      <Tag size="large">Tag</Tag>
    </View>
  );
};
```

### 圆形

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Tag size="small" round>
        Tag
      </Tag>
      <Tag round>Tag</Tag>
      <Tag size="large" round>
        Tag
      </Tag>
    </View>
  );
};
```

### 预设颜色

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Tag color="success">Tag</Tag>
      <Tag color="processing">Tag</Tag>
      <Tag color="warning">Tag</Tag>
      <Tag color="error">Tag</Tag>
    </View>
  );
};
```

### 自定义颜色

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Tag color="#f50">Tag</Tag>
      <Tag color="#2db7f5">Tag</Tag>
      <Tag color="#87d068">Tag</Tag>
      <Tag color="#108ee9">Tag</Tag>
    </View>
  );
};
```

### 不需要边框

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Tag color="success" border={false}>
        Tag
      </Tag>
      <Tag color="processing" border={false}>
        Tag
      </Tag>
      <Tag color="warning" border={false}>
        Tag
      </Tag>
      <Tag color="error" border={false}>
        Tag
      </Tag>
    </View>
  );
};
```

### 颜色填充型

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Tag color="success" fill>
        Tag
      </Tag>
      <Tag color="processing" fill>
        Tag
      </Tag>
      <Tag color="warning" fill>
        Tag
      </Tag>
      <Tag color="error" fill>
        Tag
      </Tag>
    </View>
  );
};
```

### icon

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";
import { UserOutlined } from "@uniubi/icons-taro";

const App = () => {
  return (
    <View>
      <Tag icon={<UserOutlined />}>Tag</Tag>
    </View>
  );
};
```

### 可关闭

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tag } from "uniubi-lib-mobile";
import { UserOutlined } from "@uniubi/icons-taro";

const App = () => {
  return (
    <View>
      <Tag
        closable
        onClose={() => {
          console.log("close");
        }}
      >
        Tag
      </Tag>
    </View>
  );
};
```

## API

| 参数名   | 说明             | 必填 | 类型                              | 默认值      | 备注                                                          |
| -------- | ---------------- | ---- | --------------------------------- | ----------- | ------------------------------------------------------------- |
| size     | 尺寸             | N    | `'small' \| 'default' \| 'large'` | `'default'` |                                                               |
| color    | 颜色             | N    | `string`                          |             | 预设颜色: `'success'`、`'processing'`、`'warning'`、`'error'` |
| icon     | 图标             | N    | `ReactNode`                       |             |                                                               |
| border   | 是否需要边框     | N    | `boolean`                         | `true`      |                                                               |
| round    | 是否为圆形       | N    | `boolean`                         | `false`     |                                                               |
| fill     | 是否为颜色填充型 | N    | `boolean`                         | `false`     |                                                               |
| closable | 是否可关闭       | N    | `boolean`                         | `false`     |                                                               |
| onClick  | 点击事件回调     | N    | `(e: ITouchEvent) => void`        |             |                                                               |
| onClose  | 关闭事件回调     | N    | `(e: ITouchEvent) => void`        |             |                                                               |
