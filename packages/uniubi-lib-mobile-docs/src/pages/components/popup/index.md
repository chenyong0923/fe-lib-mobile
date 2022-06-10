# Popup 弹出层

## 引入

```tsx
import { Popup } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Button, Overlay } from "uniubi-lib-mobile";

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹出层
      </Button>
      <Popup
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Box />
      </Popup>
    </View>
  );
};
```

### 弹出位置

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Button, Overlay } from "uniubi-lib-mobile";

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Button
        onClick={() => {
          openPosition("top");
        }}
      >
        顶部弹出
      </Button>
      <Button
        onClick={() => {
          openPosition("bottom");
        }}
      >
        底部弹出
      </Button>
      <Button
        onClick={() => {
          openPosition("left");
        }}
      >
        左侧弹出
      </Button>
      <Button
        onClick={() => {
          openPosition("right");
        }}
      >
        右侧弹出
      </Button>
      <Popup
        visible={visible}
        position={position}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Box />
      </Popup>
    </View>
  );
};
```

### 不需要遮照

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Button, Overlay } from "uniubi-lib-mobile";

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹出层
      </Button>
      <Popup
        visible={visible}
        overlay={false}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Box />
      </Popup>
    </View>
  );
};
```

### 点击遮照不关闭

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Button, Overlay } from "uniubi-lib-mobile";

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹出层
      </Button>
      <Popup
        visible={visible}
        closeOnClickOverlay={false}
        onClose={() => {
          setVisible(false);
        }}
      >
        <Box />
      </Popup>
    </View>
  );
};
```

## API

| 参数名              | 说明               | 必填 | 类型                                                 | 默认值     | 备注 |
| ------------------- | ------------------ | ---- | ---------------------------------------------------- | ---------- | ---- |
| visible             | 是否显示           | N    | `boolean`                                            | `false`    |      |
| position            | 弹出位置           | N    | `'center' \| 'top' \| 'bottom' \| 'left' \| 'right'` | `'center'` |      |
| overlay             | 是否需要遮照       | N    | `boolean`                                            | `true`     |      |
| onClickOverlay      | 点击遮照事件       | N    | `() => void`                                         |            |      |
| closeOnClickOverlay | 点击遮照关闭弹出层 | N    | `boolean`                                            | `false`    |      |
| onClose             | 弹出层关闭回调事件 | N    | `() => void`                                         |            |      |
| children            | 弹出内容           | N    | `React.ReactNode`                                    |            |      |
