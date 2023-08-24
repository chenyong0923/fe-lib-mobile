# FilePreview 文件预览

## 引入

```tsx
import { FilePreview } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from "react";
import { View } from "@tarojs/components";
import { FilePreview } from "uniubi-lib-mobile";

const App = () => {
  const fileList = [
    {
      name: "110.jpg",
      url: "https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/9cece8f5a4c04d89bcfe3086b8af5e8e.jpg",
    },
    {
      name: "274.mp4",
      url: "https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/64908f7a73ce4a63b00bd6b864132b22.mp4",
    },
    {
      name: "球哥心脏超声报告.PDF",
      url: "https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/13412ea907cd42fcaf551a2336ea2292.PDF",
    },
  ];

  return (
    <View>
      {fileList.map((file) => (
        <FilePreview
          name={file.name}
          url={file.url}
          key={file.url}
          preview={false}
        />
      ))}
    </View>
  );
};

export default App;
```

### 预览

```tsx
import React from "react";
import { View } from "@tarojs/components";
import { FilePreview } from "uniubi-lib-mobile";

const App = () => {
  const fileList = [
    {
      name: "110.jpg",
      url: "https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/9cece8f5a4c04d89bcfe3086b8af5e8e.jpg",
    },
    {
      name: "274.mp4",
      url: "https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/64908f7a73ce4a63b00bd6b864132b22.mp4",
    },
    {
      name: "球哥心脏超声报告.PDF",
      url: "https://blue-front.oss-cn-hangzhou.aliyuncs.com/images/13412ea907cd42fcaf551a2336ea2292.PDF",
    },
  ];

  return (
    <View>
      {fileList.map((file) => (
        <FilePreview name={file.name} url={file.url} key={file.url} />
      ))}
    </View>
  );
};

export default App;
```

## API

| 参数名  | 说明         | 必填 | 类型                       | 默认值 | 备注                                                             |
| ------- | ------------ | ---- | -------------------------- | ------ | ---------------------------------------------------------------- |
| url     | 文件地址     | Y    | `string`                   |        |                                                                  |
| name    | 文件名       | N    | `string`                   |        | 如果传了 `name` 优先使用 `name`，如果没传则通过 `url` 截取文件名 |
| preview | 是否支持预览 | N    | `boolean`                  | `true` |                                                                  |
| onClick | 点击事件     | N    | `(e: ITouchEvent) => void` |        |                                                                  |

## 支持情况

> &#9888; 仅支持小程序
