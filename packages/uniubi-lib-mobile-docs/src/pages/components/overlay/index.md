# Overlay 遮照

## 引入

```tsx
import { Overlay } from "uniubi-lib-mobile";
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
        打开遮照层
      </Button>
      <Overlay
        visible={visible}
        onClick={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};
```

## API

| 参数名   | 说明               | 必填 | 类型              | 默认值  | 备注             |
| -------- | ------------------ | ---- | ----------------- | ------- | ---------------- |
| visible  | 是否显示           | Y    | `boolean`         | `false` |                  |
| onClick  | 遮照层点击回调事件 | N    | `() => void`      |         | 一般用于关闭遮照 |
| children | 遮照内容           | N    | `React.ReactNode` |         |                  |
