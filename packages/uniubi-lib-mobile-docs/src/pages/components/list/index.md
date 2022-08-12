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
  { id: 1, name: "1-1" },
  { id: 2, name: "1-2" },
  { id: 3, name: "1-3" },
  { id: 4, name: "1-4" },
  { id: 5, name: "1-5" },
  { id: 6, name: "1-6" },
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
    <List
      enablePullRefresh
      enableLoadMore
      onRefresh={refresh}
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
  { id: 1, name: "1-1" },
  { id: 2, name: "1-2" },
  { id: 3, name: "1-3" },
  { id: 4, name: "1-4" },
  { id: 5, name: "1-5" },
  { id: 6, name: "1-6" },
  { id: 7, name: "1-7" },
  { id: 8, name: "1-8" },
  { id: 9, name: "1-9" },
  { id: 10, name: "1-10" },
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
            name: `2-${item.name?.split("-")?.[1]}`,
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
      enableLoadMore
      onRefresh={refresh}
      onLoadMore={loadMore}
      list={list}
      total={12}
      header={
        <Button
          onClick={() => {
            setFull(!full);
          }}
        >
          {full ? "关闭全屏" : "开启全屏"}
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

### 使用 useList 进行单页数据加载

```tsx
import React from "react";
import { List } from "uniubi-lib-mobile";
import Taro from "@tarojs/taro";

// 模拟请求api方法
const getSingleListApi = async () => {
  const resp: any = await new Promise((resolve) => {
    setTimeout(() => {
      const dataSource: any = [];
      for (let i = 0; i < 12; i++) {
        const id = i + 1;
        dataSource.push({ id, name: `id: ${id}` });
      }
      resolve({
        data: dataSource,
      });
    }, 1000);
  });
  return resp || {};
};
const App = () => {
  const { list, total, refresh, loadMore, filterFunction } = List.useList({
    request: getSingleListApi,
    pagination: false,
  });
  return (
    <List
      enablePullRefresh
      enableLoadMore
      onRefresh={refresh}
      onLoadMore={loadMore}
      list={list}
      total={total}
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

### 使用 useList 进行分页数据加载

```tsx
import React from "react";
import { List } from "uniubi-lib-mobile";
import Taro from "@tarojs/taro";

// 模拟请求api方法
const getPageSearchApi = async ({ page, pageSize, searchKey }) => {
  const resp: any = await new Promise((resolve) => {
    setTimeout(() => {
      const dataSource: any = [];
      if (searchKey) {
        for (let i = 0; i < 30; i++) {
          const id = (page - 1) * pageSize + i + 1;
          dataSource.push({ id, name: `id: ${id}` });
        }
      } else {
        for (let i = 0; i < pageSize; i++) {
          const id = (page - 1) * pageSize + i + 1;
          dataSource.push({ id, name: `id: ${id}` });
        }
      }

      const searchList = searchKey
        ? dataSource?.filter((item) => item.name.includes(searchKey))
        : dataSource;
      resolve({
        data: {
          list: searchList,
          total: searchKey ? searchList?.length : 30,
        },
      });
    }, 1000);
  });
  return resp || {};
};

const App = () => {
  const { list, total, refresh, loadMore, filterFunction } = List.useList({
    request: getPageSearchApi,
    responseListKey: ["data", "list"],
    pagination: {
      pageKey: "page",
      pageSizeKey: "pageSize",
      pageSize: 10,
      totalKey: ["data", "total"],
    },
  });
  return (
    <List
      enablePullRefresh
      enableLoadMore
      onRefresh={refresh}
      onLoadMore={loadMore}
      list={list}
      total={total}
      header={
        <Input
          style={{
            background: "#ffffff",
            position: "sticky",
            top: 0,
            zIndex: 2,
          }}
          placeholder={"请输入"}
          onInput={(e) => {
            filterFunction({
              searchKey: e.detail.value,
            });
          }}
        />
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

## List API

| 参数名              | 说明                                            | 必填 | 类型                                      | 默认值          | 备注                           |
| ------------------- |-----------------------------------------------| ---- |-----------------------------------------| --------------- |------------------------------|
| emptyProps          | empty 组件参数                                    | N    | `EmptyProps`                            |                 |                              |
| renderItem          | 列表项渲染方法                                       | Y    | `(item: T, index: number) => ReactNode` |                 |                              |
| list                | 数据列表                                          | Y    | `any[]`                                 |                 |                              |
| total               | 数据总数                                          | N    | `number`                                |  | 默认值为参数`list`的数据数               |
| header              | 列表头部内容                                        | N    | `ReactNode`                             |                 |                              |
| footer              | 列表底部内容                                        | N    | `ReactNode`                             |                 |                              |
| full                | 是否全屏                                          | N    | `{ customNavHeader: boolean }`          |                 | 传入是否自定义头部 customNavHeader    |
| upperThreshold      | 距顶部多远时（单位 px），触发 scrolltoupper 事件             | N    | `number`                                |                 |                              |
| lowerThreshold      | 距底部/右边多远时（单位 px），触发 scrolltolower 事件          | N    | `number`                                |                 |                              |
| enablePullRefresh   | 是否允许下拉刷新                                      | N    | `boolean`                               |                 |                              |
| enableLoadMore      | 是否允许上拉加载                                      | N    | `boolean`                               |                 |                              |
| enableEndTip        | 显示加载结束的 tip                                   | N    | `false \| string`                         | `到底了`                        |                                    |
| onRefresh           | 刷新方法                                          | N    | `() => Promise<void>`                   |                 |                              |
| onLoadMore          | 加载方法                                          | N    | `() => Promise<void>`                   |                 |                              |
| children            | 内容                                            | N    | `ReactNode`                             |                 |                              |
| scrollTop           | 设置竖向滚动条位置                                     | N    | `number`                                |                 |
| scrollIntoView      | 值应为某子元素 id（id 不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 | N    | `string`                                |                 |                              |
| scrollWithAnimation | 在设置滚动条位置时使用动画过渡                               | N    | `boolean`                               |                 |                              |
| enableBackToTop     | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向            | N    | `boolean`                               |                 | @supported:weapp, alipay, rn |

## useList API

| 参数名          | 说明                          | 必填 | 类型                                                                                             | 默认值                                                                                           | 备注 |
| --------------- | ----------------------------- | ---- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ---- |
| request         | 请求 Api 方法                 | Y    | `(params?: { [key: string]: any }) => Promise<{ [key: string]: any }>`                           |                                                                                                  |      |
| responseListKey | 请求 Api 方法放回 List 的 key | N    | `string \| string[]`                                                                             | `"data"`                                                                                         |      |
| pagination      | 分页参数                      | N    | `false \| {pageKey: string;pageSizeKey: string;totalKey: string \| string[];pageSize?: number;}` | `{pageKey: "index", pageSizeKey:"length",totalKey: ['paginationOutput','total'], pageSize: 10 }` |      |
| defaultParams   | 请求基础参数                  | N    | `{ [key: string]: any }`                                                                         |                                                                                                  |      |
| manual          | 手动                          | N    | `boolean`                                                                                        | `true`                                                                                           |      |
