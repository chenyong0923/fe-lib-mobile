# Button 按钮

## 引入

```tsx
import { Button } from "uniubi-lib-mobile";
```

## 使用指南

### 按钮类型

```tsx
<Button>default</Button>
<Button type="primary">primary</Button>
<Button type="secondary">border</Button>
<Button type="link">link</Button>
<Button type="text">text</Button>
```

### 危险按钮

```tsx
<Button danger>default</Button>
<Button type="primary" danger>primary</Button>
<Button type="secondary" danger>border</Button>
<Button type="link" danger>link</Button>
<Button type="text" danger>text</Button>
```

### 禁用按钮

```tsx
<Button disabled>default</Button>
<Button type="primary" disabled>primary</Button>
<Button type="secondary" disabled>border</Button>
<Button type="link" disabled>link</Button>
<Button type="text" disabled>text</Button>
<Button type="primary" danger disabled>primary danger</Button>
<Button type="text" danger disabled>text danger</Button>
```

### 按钮大小

```tsx
<Button>default</Button>
<Button size="small">small</Button>
```

### Block 按钮

```tsx
<Button block>default</Button>
```

### Loading

```tsx
<Button loading>loading</Button>
<Button type="primary" loading block>loading</Button>
```

### 带图标的按钮

```tsx
import { AlarmclockOutlined } from "@uniubi/icons-taro";
import React from "react";
import { Button } from "uniubi-lib-mobile";

const App = () => {
  return <Button icon={<AlarmclockOutlined />}>Button</Button>;
};
```

## API

| 参数名   | 说明         | 必填 | 类型                                         | 默认值      | 备注 |
| -------- | ------------ | ---- | -------------------------------------------- | ----------- | ---- |
| type     | 按钮类型     | N    | `'default' \| 'primary' \| 'link' \| 'text'` | `'default'` |      |
| size     | 按钮大小     | N    | `'default' \| 'small'`                       | `'default'` |      |
| danger   | 危险按钮     | N    | `boolean`                                    | `false`     |      |
| block    | Block 按钮   | N    | `boolean`                                    | `false`     |      |
| disabled | 禁用按钮     | N    | `boolean`                                    | `false`     |      |
| loading  | 加载中       | N    | `boolean`                                    | `false`     |      |
| icon     | 按钮前的图标 | N    | `React.ReactNode`                            |             |      |

其他属性参考 Taro <a href="https://taro-docs.jd.com/taro/docs/components/forms/button" target="_blank">Button 组件</a>
