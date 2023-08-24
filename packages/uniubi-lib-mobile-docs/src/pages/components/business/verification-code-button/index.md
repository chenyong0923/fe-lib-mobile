# VerificationCodeButton 验证码按钮

## 引入

```tsx
import { VerificationCodeButton } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from "react";
import { VerificationCodeButton } from "uniubi-lib-mobile";

const App = () => {
  return <VerificationCodeButton />;
};

export default App;
```

### 在输入框中使用

```tsx
import React from "react";
import { VerificationCodeButton, Input } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Input placeholder="请输入验证码" suffix={<VerificationCodeButton />} />
  );
};

export default App;
```

## API

| 参数名            | 说明                   | 必填 | 类型                  | 默认值         | 备注   |
| ----------------- | ---------------------- | ---- | --------------------- | -------------- | ------ |
| text              | 按钮文字               | N    | `React.ReactNode`     | `'发送验证码'` |        |
| time              | 倒计时时间             | N    | `number`              | `60`           | 单位 s |
| disabled          | 是否禁用               | N    | `boolean`             | `false`        |        |
| onBeforeCountdown | 倒计时开始前的回调事件 | N    | `() => Promise<void>` |                |        |
