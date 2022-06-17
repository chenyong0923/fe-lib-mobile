# Popup 弹出层

## 引入

```tsx
import { NavHeader } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

const App = () => {
    return (
        <NavHeader title="默认标题" backTip="返回" statusBarHeight={20} />
    );
};

export default App;
```

### 标题超长

```tsx
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

const App = () => {
    return (
        <NavHeader title="标题超长标题超长标题超长标题超长" />
    );
};

export default App;
```
### 背景颜色

```tsx
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

const App = () => {
    return (
        <NavHeader
            title="默认标题"
            backgroundColor={'#2228e0'}
            fontColor={'#ffffff'}
        />
    );
};

export default App;
```

### 标题居左

```tsx
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

const App = () => {
    return (
        <NavHeader title="标题居左" titlePosition="left" />
    );
};

export default App;
```

### 仅有一个页面时返回首页

```tsx
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

const App = () => {
    return (
        <NavHeader title="返回首页" homePath="/pages/index/index" />
    );
};

export default App;
```

### 不显示返回按钮

```tsx
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

const App = () => {
    return (
        <NavHeader title="不显示返回按钮" hiddenBack />
    );
};

export default App;
```

### 返回按钮修改

```tsx
import { HomeOutlined } from '@uniubi/icons-taro';
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

const App = () => {
    return (
        <NavHeader
            title="返回按钮修改"
            backIcon={<HomeOutlined style={{ fontSize: '22px' }} />}
            onBack={() => {
                alert('111');
            }}
        />
    );
};

export default App;
```

## API

| 参数名              | 说明                     | 必填 | 类型         | 默认值  | 备注               |
| ------------------- | ------------------------ | ---- | ------------ | ------- | ------------------ |
| title             | 标题                 | N    | `string` 或 `React.ReactNode` |                    |
| titlePosition            | 标题位置         | N    | `left` 或 `center`  |  `center`       |  |
| backgroundColor             | 背景颜色     | N    | `string` |     `#ffffff`     |                   |
| fontColor             | 图标及字体颜色                   | N    | `string`  |     `#000000`    |                    |
| onBack  | 重写返回方法 | N    | `() => void`    |   |                    |
| backIcon      | 返回图标       | N    | `React.ReactNode` |         |                    |
| backTip | 返回tip   | N    | `string`    |   |                    |
| hiddenBack | 是否隐藏back图标和tip   | N    | `boolean`    | `false`  |                    |
| isBottomBorder | 是否有下划线   | N    | `boolean`    | `false`  |                    |
| homePath | 在唯一页面时返回首页地址，为空时返回按钮不显示   | N    | `string`    |   |                    |
| statusBarHeight | 顶部statusBar高度——一般在layout传入   | N    | `number`    |   |                    |
