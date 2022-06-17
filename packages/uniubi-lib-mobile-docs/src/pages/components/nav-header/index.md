# Popup 弹出层

## 引入

```tsx
import { ActionSheet } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Button, ActionSheet } from "uniubi-lib-mobile";

const App = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开动作面板
      </Button>
      <ActionSheet
        visible={visible}
        actions={[{ name: "选项1" }, { name: "选项2" }]}
        onClose={() => {
          setVisible(false);
        }}
      />
    </View>
  );
};
```


## API

| 参数名              | 说明                     | 必填 | 类型         | 默认值  | 备注               |
| ------------------- | ------------------------ | ---- | ------------ | ------- | ------------------ |
| visible             | 是否显示                 | N    | `boolean`    | `false` |                    |
| onCancel            | 点击取消回调事件         | N    | `() => void` |         | 传了才出现取消按钮 |
| onClose             | 关闭动作面板回调事件     | N    | `() => void` |         |                    |
| actions             | 操作项                   | N    | `IAction[]`  |         |                    |
| closeOnClickAction  | 点击操作按钮是否关闭面板 | N    | `boolean`    | `true`  |                    |
| onClickOverlay      | 点击遮照层回调事件       | N    | `() => void` |         |                    |
| closeOnClickOverlay | 点击遮照层是否关闭面板   | N    | `boolean`    | `true`  |                    |
