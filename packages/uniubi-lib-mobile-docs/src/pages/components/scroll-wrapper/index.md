# ScrollWrapper

## 引入

```tsx
import { ScrollWrapper } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from "react";
import { ScrollWrapper } from "uniubi-lib-mobile";

const data = [
  { id: 1, name: "1-1" },
  { id: 2, name: "1-2" },
  { id: 3, name: "1-3" },
  { id: 4, name: "1-4" },
  { id: 5, name: "1-5" },
  { id: 6, name: "1-6" },
];
const App = () => {
  return (
    <ScrollWrapper>
      {data?.map((item) => (
        <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
          {item.name}
        </View>
      ))}
    </ScrollWrapper>
  );
};

export default App;
```

### 下拉刷新

```tsx
import React from "react";
import { ScrollWrapper } from "uniubi-lib-mobile";

const data = [
  { id: 1, name: "1-1" },
  { id: 2, name: "1-2" },
  { id: 3, name: "1-3" },
  { id: 4, name: "1-4" },
  { id: 5, name: "1-5" },
  { id: 6, name: "1-6" },
];

const App = () => {
  const [list, setList] = useState<any[]>(data);

  const refresh = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setList(data);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <ScrollWrapper enablePullRefresh onRefresh={refresh}>
      {list?.map((item) => (
        <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
          {item.name}
        </View>
      ))}
    </ScrollWrapper>
  );
};

export default App;
```

### 下拉加载

```tsx
import React from "react";
import { ScrollWrapper } from "uniubi-lib-mobile";

const data = [
  { id: 1, name: "1-1" },
  { id: 2, name: "1-2" },
  { id: 3, name: "1-3" },
  { id: 4, name: "1-4" },
  { id: 5, name: "1-5" },
  { id: 6, name: "1-6" },
];

const App = () => {
  const [list, setList] = useState<any[]>(data);

  const refresh = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setList(data);
        resolve(true);
      }, 1000);
    });
  };

  const loadMore = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        setList([
          ...data,
          ...data?.map((item) => ({
            id: item.id + 6,
            name: `2-${item.name?.split("-")?.[1]}`,
          })),
        ]);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <ScrollWrapper
      enablePullRefresh
      onRefresh={refresh}
      enableLoadMore
      allLoaded={list?.length === 12}
      onLoadMore={loadMore}
    >
      {list?.map((item) => (
        <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
          {item.name}
        </View>
      ))}
    </ScrollWrapper>
  );
};

export default App;
```

## API

| 参数名              | 说明                                            | 必填 | 类型                  | 默认值   | 备注                         |
| ------------------- |-----------------------------------------------| ---- | --------------------- | -------- | ---------------------------- |
| upperThreshold      | 距顶部多远时（单位 px），触发 scrolltoupper 事件             | N    | `number`              | `0`      |                              |
| lowerThreshold      | 距底部/右边多远时（单位 px），触发 scrolltolower 事件          | N    | `number`              | `50`     |                              |
| enablePullRefresh   | 是否允许下拉刷新                                      | N    | `boolean`             |          |                              |
| enableLoadMore      | 是否允许上拉加载                                      | N    | `boolean`             |          |                              |
| enableEndTip        | 显示加载结束的 tip                                   | N    | `false \| string`     | `到底了` |                              |
| allLoaded           | 是否全部加载完成（针对分页列表）                              | N    | `boolean`             | `false`  |                              |
| onRefresh           | 刷新方法                                          | N    | `() => Promise<void>` |          |                              |
| onLoadMore          | 加载方法                                          | N    | `() => Promise<void>` |          |                              |
| children            | 内容                                            | N    | `ReactNode`           |          |                              |
| scrollTop           | 设置竖向滚动条位置                                     | N    | `number`              |          |
| scrollIntoView      | 值应为某子元素 id（id 不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 | N    | `string`              |          |                              |
| scrollWithAnimation | 在设置滚动条位置时使用动画过渡                               | N    | `boolean`             |          |                              |
| enableBackToTop     | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向            | N    | `boolean`             |          | @supported:weapp, alipay, rn |
