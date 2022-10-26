# Modal 弹窗

## 引入

```tsx
import { Modal } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Button, Modal } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹窗
      </Button>
      <Modal
        visible={visible}
        title="标题"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        Modal
      </Modal>
    </View>
  );
};
```

### 圆形按钮

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Button, Modal } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹窗
      </Button>
      <Modal
        visible={visible}
        title="标题"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        roundButton
      >
        Modal
      </Modal>
    </View>
  );
};
```

### 自定义 footer

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Button, Modal } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹窗
      </Button>
      <Modal
        visible={visible}
        title="标题"
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
        footer={null}
      >
        Modal
      </Modal>
    </View>
  );
};
```

## API

| 参数名              | 说明               | 必填 | 类型          | 默认值   | 备注                                                      |
| ------------------- | ------------------ | ---- | ------------- | -------- | --------------------------------------------------------- |
| visible             | 是否显示           | N    | `boolean`     | `false`  |                                                           |
| title               | 标题               | N    | `ReactNode`   |          |                                                           |
| children            | 内容               | N    | `ReactNode`   |          |                                                           |
| okText              | 确定按钮文案       | N    | `string`      | `"确定"` |                                                           |
| okBtnProps          | 确定按钮属性       | N    | `ButtonProps` |          | 同 [Button Props](/button)                                |
| onOk                | 点击确定按钮事件   | N    | `() => void`  |          |                                                           |
| cancelText          | 取消按钮文案       | N    | `string`      | `"取消"` |                                                           |
| cancelBtnProps      | 取消按钮属性       | N    | `ButtonProps` |          | 同 [Button Props](/button)                                |
| onCancel            | 点击取消按钮事件   | N    | `() => void`  |          |                                                           |
| onClickOverlay      | 点击遮照事件       | N    | `() => void`  |          |                                                           |
| closeOnClickOverlay | 点击遮照关闭弹出层 | N    | `boolean`     | `false`  |                                                           |
| roundButton         | 圆形按钮           | N    | `boolean`     | `false`  |                                                           |
| footer              | 底部渲染           | N    | `ReactNode`   |          | 只要传入就会按传入的规则渲染，不想要 footer 可以传 `null` |
