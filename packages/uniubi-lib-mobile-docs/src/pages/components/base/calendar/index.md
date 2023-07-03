# Calendar 日历

## 引入

```tsx
import { Calendar } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

> 基础使用时，置灰非当前月份的日期，可以点击，点击后跳转至日期所在月

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Calendar } from "uniubi-lib-mobile";
import dayjs, { type Dayjs } from "dayjs";

const App = () => {
  const [value, setValue] = useState<Dayjs>(dayjs());

  return (
    <View>
      <Calendar
        value={value}
        onChange={(date) => {
          setValue(date);
        }}
      />
    </View>
  );
};
```

### 可选范围

> 存在 min 或 max 时，置灰范围外的日期，不可点击

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Calendar } from "uniubi-lib-mobile";
import dayjs, { type Dayjs } from "dayjs";

const App = () => {
  const [value, setValue] = useState<Dayjs>(dayjs());

  return (
    <View>
      <Calendar
        value={value}
        onChange={(date) => {
          setValue(date);
        }}
        min={dayjs().subtract(1, "day")}
        max={dayjs().add(1, "day")}
      />
    </View>
  );
};
```

### 选择时间段

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Calendar } from "uniubi-lib-mobile";
import dayjs, { type Dayjs } from "dayjs";

const App = () => {
  const [range, setRange] = useState<[Dayjs, Dayjs]>([
    dayjs().subtract(1, "day"),
    dayjs().add(1, "day"),
  ]);

  return (
    <View>
      <Calendar.Range
        value={range}
        onChange={(r) => {
          setRange(r);
        }}
      />
    </View>
  );
};
```

### 渲染自定义内容

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Calendar } from "uniubi-lib-mobile";
import dayjs from "dayjs";

const App = () => {
  return (
    <View>
      <Calendar
        dateRender={(date) => {
          if (date.valueOf() === dayjs().startOf("day").valueOf()) {
            return <Text>今</Text>;
          }
          return null;
        }}
      />
    </View>
  );
};
```

### 不同类型

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Calendar } from "uniubi-lib-mobile";
import dayjs, { type Dayjs } from "dayjs";

const App = () => {
  const [month, setMonth] = useState<string>(dayjs().format('YYYY-MM'));
  const [year, setYear] = useState<string>(dayjs().format('YYYY');

  return (
    <View>
      <Calendar
        type="month"
        value={month}
        onChange={(v) => {
          setMonth(v);
        }}
      />
      <Calendar
        type="year"
        value={year}
        onChange={(v) => {
          setYear(v);
        }}
      />
    </View>
  );
};
```

## API

```ts
type ValueType = Dayjs | string;
```

| 参数名     | 说明             | 必填 | 类型                         | 默认值  | 备注                                                                             |
| ---------- | ---------------- | ---- | ---------------------------- | ------- | -------------------------------------------------------------------------------- |
| type       | 日历类型         | N    | `'year' \| 'month' \| 'day'` | `'day'` |                                                                                  |
| value      | 选中值           | N    | `ValueType`                  |         | 根据 `type` 进行推断，`type` 为 `day` 时 `value` 类型为 `Dayjs`，否则为 `string` |
| min        | 可选的最小日期   | N    | `Dayjs`                      |         |                                                                                  |
| max        | 可选的最大日期   | N    | `Dayjs`                      |         |                                                                                  |
| onSelect   | 选中日期回调事件 | N    | `(value: ValueType) => void` |         |                                                                                  |
| onChange   | 值改变回调事件   | N    | `(value: ValueType) => void` |         |                                                                                  |
| dateRender | 自定义渲染内容   | N    | `(date: Dayjs) => ReactNode` |         |                                                                                  |

### Calendar.Range

| 参数名   | 说明                 | 必填 | 类型                                      | 默认值 | 备注 |
| -------- | -------------------- | ---- | ----------------------------------------- | ------ | ---- |
| value    | 选中范围             | N    | `[ValueType, ValueType]`                  |        |      |
| onChange | 选中范围改变回调事件 | N    | `(value: [ValueType, ValueType]) => void` |        |      |

其他 API 同 Calendar Props
