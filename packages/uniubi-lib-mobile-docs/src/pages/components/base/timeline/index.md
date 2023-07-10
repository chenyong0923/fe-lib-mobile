# Timeline 时间轴

## 引入

```tsx
import { Timeline } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Timeline } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Timeline>
        <Timeline.Item title="111" content="content" />
        <Timeline.Item title="222" content="content" />
        <Timeline.Item title="333" content="content" />
      </Timeline>
    </View>
  );
};
```

### 自定义 icon

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Timeline } from "uniubi-lib-mobile";
import {
  AggregateOutlined,
  LabelOutlined,
  RemoveOutlined,
} from "@uniubi/icons-taro";

const App = () => {
  return (
    <View>
      <Timeline>
        <Timeline.Item title="111" icon={<AggregateOutlined />} />
        <Timeline.Item title="222" icon={<LabelOutlined />} />
        <Timeline.Item title="333" icon={<RemoveOutlined />} />
      </Timeline>
    </View>
  );
};
```

## API

| 参数名   | 说明                           | 必填 | 类型        | 默认值 | 备注 |
| -------- | ------------------------------ | ---- | ----------- | ------ | ---- |
| children | 子元素，只接收 `Timeline.Item` | N    | `ReactNode` |        |      |

### Timeline.Item

| 参数名  | 说明     | 必填 | 类型        | 默认值 | 备注 |
| ------- | -------- | ---- | ----------- | ------ | ---- |
| title   | 标题     | Y    | `ReactNode` |        |      |
| content | 描述内容 | N    | `ReactNode` |        |      |
| icon    | 图标     | N    | `ReactNode` |        |      |
