# Loading 加载

## 引入

```tsx
import { Loading } from "uniubi-lib-mobile";
```

## 使用指南

### 加载类型

```tsx
<Loading />
<Loading type="primary" />
```

### 加载文案

```tsx
<Loading text="Loading..." />
<Loading type="primary" text="Loading..." />
```

### 容器

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Button, Loading } from "uniubi-lib-mobile";

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View>
      <Button
        onClick={() => {
          setLoading(!loading);
        }}
      >
        Toggle
      </Button>
      <Loading type="primary" loading={loading}>
        <View style={{ padding: 20, backgroundColor: "#2228e0" }}>
          <View>这是一段文字</View>
          <View>这是一段文字</View>
        </View>
      </Loading>
    </View>
  );
};
```

## API

| 参数名  | 说明     | 必填 | 类型                        | 默认值      | 备注 |
| ------- | -------- | ---- | --------------------------- | ----------- | ---- |
| type    | 加载类型 | N    | `'default' \| 'primary'`    | `'default'` |      |
| text    | 加载文案 | N    | `string \| React.ReactNode` |             |      |
| loading | 是否显示 | N    | `boolean`                   | `true`      |      |
