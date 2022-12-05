# MultipleChoice 选择题

## 引入

```tsx
import { MultipleChoice } from "uniubi-lib-mobile";
```

## 使用指南

### 单选

```tsx
import React from "react";
import { MultipleChoice } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<number>();

  return (
    <MultipleChoice
      question="不要在你家里放一件你不知其用，或你认为不美的东西"
      options={[
        { label: "这里是选项1", value: 1 },
        { label: "这里是选项2", value: 2 },
        { label: "这里是选项3", value: 3 },
        { label: "这里是选项4", value: 4 },
      ]}
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
    />
  );
};

export default App;
```

### 多选

```tsx
import React from "react";
import { MultipleChoice } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<number[]>();

  return (
    <MultipleChoice
      question="不要在你家里放一件你不知其用，或你认为不美的东西"
      options={[
        { label: "这里是选项1", value: 1 },
        { label: "这里是选项2", value: 2 },
        { label: "这里是选项3", value: 3 },
        { label: "这里是选项4", value: 4 },
      ]}
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
      multiple
    />
  );
};

export default App;
```

### 修改选项序号

```tsx
import React from "react";
import { MultipleChoice } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<number>();

  return (
    <MultipleChoice
      question="不要在你家里放一件你不知其用，或你认为不美的东西"
      options={[
        { label: "这里是选项1", value: 1 },
        { label: "这里是选项2", value: 2 },
        { label: "这里是选项3", value: 3 },
        { label: "这里是选项4", value: 4 },
      ]}
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
      signs={Array.from({ length: 4 }).map((_, index) => index + 1)}
    />
  );
};

export default App;
```

### 选择组

```tsx
import React from "react";
import { MultipleChoice } from "uniubi-lib-mobile";

const App = () => {
  const [value, setValue] = useState<number>();

  const questions = [
    {
      id: 1,
      question: "不要在你家里放一件你不知其用，或你认为不美的东西",
      options: [
        { label: "这里是选项1", value: 1 },
        { label: "这里是选项2", value: 2 },
        { label: "这里是选项3", value: 3 },
        { label: "这里是选项4", value: 4 },
      ],
      multiple: false,
    },
    {
      id: 2,
      question: "不要在你家里放一件你不知其用，或你认为不美的东西",
      options: [
        { label: "这里是选项1", value: 1 },
        { label: "这里是选项2", value: 2 },
        { label: "这里是选项3", value: 3 },
        { label: "这里是选项4", value: 4 },
      ],
      multiple: true,
    },
    {
      id: 3,
      question: "不要在你家里放一件你不知其用，或你认为不美的东西",
      options: [
        { label: "这里是选项1", value: 1 },
        { label: "这里是选项2", value: 2 },
        { label: "这里是选项3", value: 3 },
        { label: "这里是选项4", value: 4 },
      ],
      multiple: false,
    },
  ];

  return (
    <MultipleChoice.Group
      value={value4}
      onChange={(val) => {
        setValue4(val);
      }}
    >
      {questions.map((item) => (
        <MultipleChoice
          key={item.id}
          question={item.question}
          options={item.options}
          multiple={item.multiple}
        />
      ))}
    </MultipleChoice.Group>
  );
};

export default App;
```

## API

| 参数名   | 说明                 | 必填 | 类型                                         | 默认值                | 备注                                                       |
| -------- | -------------------- | ---- | -------------------------------------------- | --------------------- | ---------------------------------------------------------- |
| question | 问题                 | N    | `string`                                     |                       |                                                            |
| options  | 选项                 | N    | `Option[]`                                   |                       | `Option` 见下方                                            |
| multiple | 是否多选             | N    | `boolean`                                    | `false`               |                                                            |
| modeTag  | 是否显示选择类型标签 | N    | `boolean \| ReactNode`                       | `true`                | 如果设置布尔值，则表示是否显示默认标签，同时支持自定义传入 |
| signs    | 选项序号             | N    | `string[]`                                   | 默认使用 A-Z 大写字母 |                                                            |
| value    | 选中值               | N    | `ValueType \| ValueType[]`                   |                       | `ValueType` 见下方                                         |
| onChange | 选中值改变事件       | N    | `(value?: ValueType \| ValueType[]) => void` |                       |                                                            |

```ts
interface Option {
  label: string;
  value: ValueType;
}

type ValueType = string | number;
```

### MultipleChoice.Group

| 参数名   | 说明                       | 必填 | 类型                                                | 默认值  | 备注                                                       |
| -------- | -------------------------- | ---- | --------------------------------------------------- | ------- | ---------------------------------------------------------- |
| chilren  | 可插入 MultipleChoice 组件 | N    | `ReactNode`                                         | `false` |                                                            |
| multiple | 是否多选                   | N    | `boolean`                                           | `false` |                                                            |
| modeTag  | 是否显示选择类型标签       | N    | `boolean \| ReactNode`                              | `true`  | 如果设置布尔值，则表示是否显示默认标签，同时支持自定义传入 |
| value    | 选中值                     | N    | `Array<ValueType \| ValueType[]>`                   |         |                                                            |
| onChange | 选中值改变事件             | N    | `(value?: Array<ValueType \| ValueType[]>) => void` |         |
