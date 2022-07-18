# Toast 轻提示

## 引入

```tsx
import { Toast } from "uniubi-lib-mobile";
```

## 使用指南

> **注意**：
>
> success 类型和 error 类型，文本最多显示 7 个汉字长度
>
> info 类型当文本超过 24 个字时，使用 Toast.showModal，不超过 24 个字时使用 Toast.showToast

### 基础用法

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Button, Toast } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Button
        onClick={() => {
          Toast.info("info");
        }}
      >
        info
      </Button>
      <Button
        type="primary"
        onClick={() => {
          Toast.success("success");
        }}
      >
        success
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => {
          Toast.error("error");
        }}
      >
        error
      </Button>
    </View>
  );
};
```

### 长文本

```tsx
import { View } from "@tarojs/components";
import React from "react";
import { Button, Toast } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <Button
        onClick={() => {
          Toast.info("长文本长文本长文本长文本长文本长文本长文本长文本长文本");
        }}
      >
        info
      </Button>
    </View>
  );
};
```

## API

```tsx
class Toast {
  static info: (
    msg: string,
    option?: Taro.showToast.Option | Taro.showModal.Option
  ) => void;
  static success: (msg: string, option?: Taro.showToast.Option) => void;
  static error: (msg: string, option?: Taro.showToast.Option) => void;
}
```

详细 API 参考微信官方文档：

- [wx.showModal(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)
- [wx.showToast(Object object)](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)
