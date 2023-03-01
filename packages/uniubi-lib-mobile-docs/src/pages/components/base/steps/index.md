# Steps 步骤条

## 引入

```tsx
import { Steps } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Steps, Button } from "uniubi-lib-mobile";

const App = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <View>
      <Steps active={step}>
        <Steps.Item title="步骤一" description="描述一" />
        <Steps.Item title="步骤二" description="描述二" />
        <Steps.Item title="步骤三" description="描述三" />
      </Steps>
      <Button
        onClick={() => {
          setStep(step - 1);
        }}
        disabled={step <= 1}
      >
        上一步
      </Button>
      <Button
        onClick={() => {
          setStep(step + 1);
        }}
        disabled={step >= 3}
      >
        下一步
      </Button>
    </View>
  );
};
```

### 纵向步骤条

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Steps, Button } from "uniubi-lib-mobile";

const App = () => {
  const [step, setStep] = useState<number>(1);

  return (
    <View>
      <Steps active={step2} layout="vertical">
        <Steps.Item title="步骤一" description="描述一">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </Steps.Item>
        <Steps.Item title="步骤二" description="描述二">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </Steps.Item>
        <Steps.Item title="步骤三" description="描述三">
          内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </Steps.Item>
      </Steps>
      <Button
        onClick={() => {
          setStep2(step2 - 1);
        }}
        disabled={step2 <= 1}
      >
        上一步
      </Button>
      <Button
        onClick={() => {
          setStep2(step2 + 1);
        }}
        disabled={step2 >= 3}
      >
        下一步
      </Button>
    </View>
  );
};
```

## API

| 参数名 | 说明     | 必填 | 类型                         | 默认值         | 备注          |
| ------ | -------- | ---- | ---------------------------- | -------------- | ------------- |
| layout | 布局方式 | N    | `'horizontal' \| 'vertical'` | `'horizontal'` |               |
| active | 当前位置 | N    | `number`                     | `1`            | 从 1 开始计数 |

### Steps.Item

| 参数名      | 说明     | 必填 | 类型                       | 默认值 | 备注 |
| ----------- | -------- | ---- | -------------------------- | ------ | ---- |
| title       | 标题     | N    | `React.ReactNode`          |        |      |
| description | 描述     | N    | `React.ReactNode`          |        |      |
| onClick     | 点击事件 | N    | `(e: ITouchEvent) => viod` |        |      |
| onSelect    | 选中事件 | N    | `(index: number) => viod`  |        |      |
