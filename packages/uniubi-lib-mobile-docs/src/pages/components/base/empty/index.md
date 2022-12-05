# Empty 空状态

## 引入

```tsx
import { Empty } from "uniubi-lib-mobile";
```

## 使用指南

### 基本使用

```tsx
import React from "react";
import { Empty } from "uniubi-lib-mobile";

const App = () => {
  return <Empty />;
};

export default App;
```

### 自定义 Empty1

```tsx
import React from "react";
import { Empty } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Empty
      src="https://fe-cloud.uni-ubi.com/image/1653976906613-meeting.png?x-oss-process=img/q/80"
      height={210}
      mode="heightFix"
      tip="暂无会议"
    />
  );
};

export default App;
```

### 自定义 Empty2

```tsx
import React from "react";
import { Empty } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Empty
      src="https://fe-cloud.uni-ubi.com/image/1653976906613-meeting.png?x-oss-process=img/q/80"
      width={210}
      height={210}
      tip={
        <View style={{ display: "flex" }}>
          <View>暂无会议，</View>
          <View style={{ color: "#2228e0" }}>立即预约</View>
        </View>
      }
    />
  );
};

export default App;
```

## API

| 参数名     | 说明         | 必填 | 类型                        | 默认值       | 备注 |
| ---------- | ------------ | ---- | --------------------------- | ------------ | ---- |
| tip        | 空状态说明   | N    | `string \| React.ReactNode` | `"暂无数据"` |
| paddingTop | 距离顶部高度 | N    | `number`                    | `200`        |      |

**其余属性同 Image 组件**
