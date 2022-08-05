# List 列表组件

## 引入

```tsx
import { List } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from "react";
import { List } from "uniubi-lib-mobile";

const data = [
  { id: 1, name: '1-1' },
  { id: 2, name: '1-2' },
  { id: 3, name: '1-3' },
  { id: 4, name: '1-4' },
  { id: 5, name: '1-5' },
  { id: 6, name: '1-6' },
];
const App = () => {
  return (
    <List
      list={data}
      renderItem={(item) => (
        <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
          {item.name}
        </View>
      )}
    />
  );
};

export default App;
```

### 下拉刷新

```tsx
import React from "react";
import { List } from "uniubi-lib-mobile";

const data = [
  { id: 1, name: '1-1' },
  { id: 2, name: '1-2' },
  { id: 3, name: '1-3' },
  { id: 4, name: '1-4' },
  { id: 5, name: '1-5' },
  { id: 6, name: '1-6' },
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
    <List
      enablePullRefresh
      onRefresh={refresh}
      list={list}
      renderItem={(item) => (
        <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
          {item.name}
        </View>
      )}
    />
  );
};

export default App;
```

### 下拉加载

```tsx
import React from "react";
import { List } from "uniubi-lib-mobile";

const data = [
  { id: 1, name: '1-1' },
  { id: 2, name: '1-2' },
  { id: 3, name: '1-3' },
  { id: 4, name: '1-4' },
  { id: 5, name: '1-5' },
  { id: 6, name: '1-6' },
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
            name: `2-${item.name?.split('-')?.[1]}`,
          })),
        ]);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <List
      enablePullRefresh
      onRefresh={refresh}
      enableEndTip
      onLoadMore={loadMore}
      list={list}
      total={12}
      renderItem={(item) => (
        <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
          {item.name}
        </View>
      )}
    />
  );
};

export default App;
```

### 全屏显示

```tsx
import React from "react";
import { List } from "uniubi-lib-mobile";

const data = [
  { id: 1, name: '1-1' },
  { id: 2, name: '1-2' },
  { id: 3, name: '1-3' },
  { id: 4, name: '1-4' },
  { id: 5, name: '1-5' },
  { id: 6, name: '1-6' },
  { id: 7, name: '1-7' },
  { id: 8, name: '1-8' },
  { id: 9, name: '1-9' },
  { id: 10, name: '1-10' },
];

const App = () => {
  const [list, setList] = useState<any[]>(data);
  const [full, setFull] = useState<boolean>(false);
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
            id: item.id + 10,
            name: `2-${item.name?.split('-')?.[1]}`,
          })),
        ]);
        resolve(true);
      }, 1000);
    });
  };

  return (
    <List
      full={full ? { customNavHeader: false } : undefined}
      enablePullRefresh
      onRefresh={refresh}
      enableEndTip
      onLoadMore={loadMore}
      list={list}
      total={12}
      renderHeader={
        <Button
          onClick={() => {
            setFull(!full);
          }}
        >
          {full ? '关闭全屏' : '开启全屏'}
        </Button>
      }
      renderItem={(item) => (
        <View key={item.id} style={{ height: Taro.pxTransform(160) }}>
          {item.name}
        </View>
      )}
    />
  );
};

export default App;
```

## API

| 参数名           | 说明                                           | 必填 | 类型                        | 默认值 | 备注 |
| ---------------- | ---------------------------------------------- | ---- | --------------------------- | -- | ---- |
| emptyProps           | empty组件参数     | N    | `EmptyProps`                |    |      |
| renderItem           | 列表项     | Y    | `(item: any, index: number) => ReactNode`                |    |      |
| list           | 数据列表     | Y    | `any[]`                |    |      |
| total           | 数据总数     | N    | `number`                |  `"list.length"`  |      |
| renderHeader         | 列表头部内容 | N    | `ReactNode`                    |    |      |
| renderFooter         | 列表底部内容 | N    | `ReactNode`                    |    |      |
| full         | 是否全屏 | N    | `{ customNavHeader: boolean }`                    |    |   传入是否自定义头部customNavHeader   |
| upperThreshold           | 距顶部多远时（单位px），触发 scrolltoupper 事件     | N    | `number`                |    |      |
| lowerThreshold         | 距底部/右边多远时（单位px），触发 scrolltolower 事件   | N    | `number`           |    |      |
| enablePullRefresh          | 是否允许下拉刷新                                       | N    | `boolean`                    |    |      |
| enableLoadMore       | 是否允许下拉刷新                      | N    | `boolean`                   |  |      |
| enableEndTip | 是否显示加载结束的tip                                  | N    | `boolean`                   | `true` |      |
| endTip | 加载结束的tip                                  | N    | `string`                   | `到底了` |      |
| onRefresh         | 刷新方法 | N    | `() => Promise<void>`                    |    |      |
| onLoadMore         | 加载方法 | N    | `() => Promise<void>`                    |    |      |
| children         | 内容 | N    | `ReactNode`                    |    |      |
| scrollTop            | 设置竖向滚动条位置                                           | N    | `number` |    |
| scrollIntoView    | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素    | N    | `string`        |  |      |
| scrollWithAnimation  | 在设置滚动条位置时使用动画过渡 | N    | `boolean`                    |  |      |
| enableBackToTop        | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向           | N    | `boolean`  |  |  @supported:weapp, alipay, rn    |
