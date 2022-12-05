# Image 图片

## 引入

```tsx
import { Image } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Image } from "uniubi-lib-mobile";

const App = () => {
  const src =
    "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp";

  return (
    <View>
      <Image src={src} />
    </View>
  );
};
```

### 填充模式

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Image } from "uniubi-lib-mobile";

const App = () => {
  const src =
    "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp";
  const modes = ["scaleToFill", "aspectFit", "aspectFill"];

  return (
    <View>
      {modes.map((item) => (
        <Box key={item} title={item}>
          <Image src={src2} mode={item} />
        </Box>
      ))}
    </View>
  );
};
```

### 图片放大预览

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Image } from "uniubi-lib-mobile";

const App = () => {
  const src =
    "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp";
  const src2 = "https://img.yzcdn.cn/vant/cat.jpeg";

  return (
    <View>
      <Box title="默认">
        <Image src={src} preview />
      </Box>
      <Box title="自定义">
        <Image src={src} preview={{ urls: [src, src2] }} />
      </Box>
    </View>
  );
};
```

### 圆形图片

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Image } from "uniubi-lib-mobile";

const App = () => {
  const src =
    "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp";

  return (
    <View>
      <Image src={src} round />
    </View>
  );
};
```

### 加载失败

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Image } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Box title="默认">
        <Image src="src" />
      </Box>
      <Box title="自定义">
        <Image src="src" fallback="加载失败" />
      </Box>
    </View>
  );
};
```

## API

| 参数名   | 说明               | 必填 | 类型                                  | 默认值  | 备注 |
| -------- | ------------------ | ---- | ------------------------------------- | ------- | ---- |
| width    | 宽度               | N    | `string \| number`                    | `80`    |      |
| height   | 高度               | N    | `string \| number`                    | `80`    |      |
| preview  | 放大预览           | N    | `boolean \| Taro.previewImage.Option` |         |      |
| round    | 圆形图片           | N    | `boolean`                             | `false` |      |
| fallback | 加载失败时显示内容 | N    | `React.ReactNode`                     |         |      |
