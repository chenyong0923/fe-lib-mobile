# Tabs 选项卡

## 引入

```tsx
import { Tabs } from "uniubi-lib-mobile";
```

## 使用指南

### 基本用法

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tabs } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Tabs>
      <Tabs.Pane tab="Tab 1" tabKey="1">
        111
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 2" tabKey="2">
        222
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 3" tabKey="3">
        333
      </Tabs.Pane>
    </Tabs>
  );
};
```

### 选项过多时滚动

当选项数量超过 4 个时，会进行滚动布局，仅横向时有效

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tabs } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Tabs>
      <Tabs.Pane tab="Tab 1" tabKey="1">
        111
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 2" tabKey="2">
        222
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 3" tabKey="3">
        333
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 4Tab 4Tab 4Tab 4Tab 4" tabKey="4">
        444
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 5Tab 5Tab 5Tab 5" tabKey="5">
        555
      </Tabs.Pane>
    </Tabs>
  );
};
```

### 受控用法

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Tabs } from "uniubi-lib-mobile";

const App = () => {
  const [activeKey, setActiveKey] = useState<string>("1");

  return (
    <Tabs
      activeKey={activeKey}
      onChange={(val) => {
        setActiveKey(val);
      }}
    >
      <Tabs.Pane tab="Tab 1" tabKey="1">
        111
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 2" tabKey="2">
        222
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 3" tabKey="3">
        333
      </Tabs.Pane>
    </Tabs>
  );
};
```

### 无高亮线

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tabs } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Tabs line={false}>
      <Tabs.Pane tab="Tab 1" tabKey="1">
        111
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 2" tabKey="2">
        222
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 3" tabKey="3">
        333
      </Tabs.Pane>
    </Tabs>
  );
};
```

### 纵向布局

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Tabs } from "uniubi-lib-mobile";

import styles from "./index.module.less";

const App = () => {
  return (
    <Tabs layout="vertical" className={styles["layout-vertical"]}>
      <Tabs.Pane tab="Tab 1" tabKey="1">
        111
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 2" tabKey="2">
        222
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 3" tabKey="3">
        333
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 4" tabKey="4">
        444
      </Tabs.Pane>
      <Tabs.Pane tab="Tab 5" tabKey="5">
        444
      </Tabs.Pane>
    </Tabs>
  );
};
```

```less
// index.module.less
.layout-vertical {
  :global {
    .ulm-tabs-nav {
      height: 300px;
    }
  }
}
```

## API

### Tabs

| 参数名    | 说明               | 必填 | 类型                          | 默认值         | 备注 |
| --------- | ------------------ | ---- | ----------------------------- | -------------- | ---- |
| layout    | 布局方式           | N    | `'horizontal' \| 'vertical'`  | `'horizontal'` |      |
| activeKey | 选中项 key 值      | N    | `string`                      |                |      |
| onChange  | 切换选项卡回调事件 | N    | `(activeKey: string) => void` |                |      |
| line      | 是否需要高亮线     | N    | `boolean`                     | `true`         |      |

### Tabs.Pane

| 参数名 | 说明       | 必填 | 类型        | 默认值 | 备注 |
| ------ | ---------- | ---- | ----------- | ------ | ---- |
| tabKey | 选项的 key | Y    | `string`    |        |      |
| tab    | 选项标题   | Y    | `ReactNode` |        |      |
