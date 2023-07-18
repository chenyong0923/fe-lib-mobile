# TimePicker 时间选择器

## 引入

```tsx
import { TimePicker } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { TimePicker } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <TimePicker
        onOk={(v) => {
          console.log("selected", v);
        }}
      >
        <View>时间选择器</View>
      </TimePicker>
    </View>
  );
};
```

### 受控用法

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { TimePicker } from "uniubi-lib-mobile";
import dayjs, { type Dayjs } from "dayjs";

const App = () => {
  const [selected, setSelected] = useState<Dayjs>(
    dayjs().hour(12).minute(0).second(0)
  );

  return (
    <View>
      <TimePicker
        value={selected}
        onChange={(v) => {
          setSelected(v);
        }}
        onOk={(v) => {
          console.log("selected", v);
        }}
      >
        <View>时间选择器</View>
      </TimePicker>
    </View>
  );
};
```

### 范围选择

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { TimePicker } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <TimePicker.Range
        onOk={(v) => {
          console.log("selected", v);
        }}
      >
        <View>范围选择</View>
      </TimePicker.Range>
    </View>
  );
};
```

## API

| 参数名          | 说明                                                                               | 必填 | 类型                     | 默认值 | 备注 |
| --------------- | ---------------------------------------------------------------------------------- | ---- | ------------------------ | ------ | ---- |
| visible         | 是否显示                                                                           | N    | `boolean`                |        |      |
| value           | 选中项                                                                             | N    | `Dayjs`                  |        |      |
| indicatorClass  | 设置选择器中间选中框的类名                                                         | N    | `string`                 |        |      |
| indicatorStyle  | 设置选择器中间选中框的样式                                                         | N    | `string`                 |        |      |
| maskClass       | 设置蒙层的类名                                                                     | N    | `string`                 |        |      |
| maskStyle       | 设置蒙层的样式                                                                     | N    | `string`                 |        |      |
| immediateChange | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件 | N    | `boolean`                | `true` |      |
| onChange        | 选中值改变回调事件                                                                 | N    | `(value: Dayjs) => void` |        |      |
| onOk            | 点击确定回调事件                                                                   | N    | `(value: Dayjs) => void` |        |      |
| onCancel        | 点击取消回调事件                                                                   | N    | `() => void`             |        |      |
| onPickStart     | 当滚动选择开始时候触发事件                                                         | N    | `CommonEventFunction`    |        |      |
| onPickEnd       | 当滚动选择结束时候触发事件                                                         | N    | `CommonEventFunction`    |        |      |

### Range

| 参数名   | 说明               | 必填 | 类型                                                                                    | 默认值 | 备注 |
| -------- | ------------------ | ---- | --------------------------------------------------------------------------------------- | ------ | ---- |
| value    | 选中项             | N    | `[Dayjs, Dayjs]`                                                                        |        |      |
| onChange | 选中值改变回调事件 | N    | `( current: { activeKeyType: ActiveKeyType; value: Dayjs }, range: ValueType ) => void` |        |      |
| onOk     | 点击确定回调事件   | N    | `(value: [Dayjs, Dayjs]) => void`                                                       |        |      |

其余参数同 TimePicker
