# Picker 选择器

## 引入

```tsx
import { Picker } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Picker } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Picker
        options={[
          [
            { label: "2-1", value: "2-1" },
            { label: "2-2", value: "2-2" },
          ],
        ]}
        onOk={(v) => {
          console.log("selected", v);
        }}
      >
        <View>Picker</View>
      </Picker>
    </View>
  );
};
```

### 多列用法

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Picker } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Picker
        options={[
          [
            { label: "1-1", value: "1-1" },
            { label: "1-2", value: "1-2" },
          ],
          [
            { label: "2-1", value: "2-1" },
            { label: "2-2", value: "2-2" },
          ],
        ]}
        onOk={(v) => {
          console.log("selected", v);
        }}
      >
        <View>Picker</View>
      </Picker>
    </View>
  );
};
```

### 受控用法

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Picker } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<string[]>(["1-2", "2-2"]);

  return (
    <View>
      <Picker
        options={[
          [
            { label: "1-1", value: "1-1" },
            { label: "1-2", value: "1-2" },
          ],
          [
            { label: "2-1", value: "2-1" },
            { label: "2-2", value: "2-2" },
          ],
        ]}
        value={value}
        onOk={(v) => {
          setValue(v);
        }}
      >
        <View>{value.join("/")}</View>
      </Picker>
    </View>
  );
};
```

## API

| 参数名          | 说明                                                                               | 必填 | 类型                              | 默认值 | 备注     |
| --------------- | ---------------------------------------------------------------------------------- | ---- | --------------------------------- | ------ | -------- |
| visible         | 是否显示                                                                           | N    | `boolean`                         |        |          |
| title           | 标题                                                                               | N    | `ReactNode`                       |        |          |
| options         | 选项                                                                               | Y    | `Array<Array<Option<ValueType>>>` |        | 二维数组 |
| defaultValue    | 默认选中项                                                                         | N    | `ValueType`                       |        |          |
| value           | 选中项                                                                             | N    | `ValueType`                       |        |          |
| indicatorClass  | 设置选择器中间选中框的类名                                                         | N    | `string`                          |        |          |
| indicatorStyle  | 设置选择器中间选中框的样式                                                         | N    | `string`                          |        |          |
| maskClass       | 设置蒙层的类名                                                                     | N    | `string`                          |        |          |
| maskStyle       | 设置蒙层的样式                                                                     | N    | `string`                          |        |          |
| immediateChange | 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件 | N    | `boolean`                         | `true` |          |
| onChange        | 选中值改变回调事件                                                                 | N    | `(value: ValueType[]) => void`    |        |          |
| onOk            | 点击确定回调事件                                                                   | N    | `(value: ValueType[]) => void`    |        |          |
| onCancel        | 点击取消回调事件                                                                   | N    | `() => void`                      |        |          |
| onPickStart     | 当滚动选择开始时候触发事件                                                         | N    | `CommonEventFunction`             |        |          |
| onPickEnd       | 当滚动选择结束时候触发事件                                                         | N    | `CommonEventFunction`             |        |          |

```ts
type ValueType = string | number;

interface Option<T extends ValueType> {
  label: string;
  value: T;
}
```
