# Grid 栅格

## 引入

```tsx
import { Row, Col } from "uniubi-lib-mobile";
```

## 使用指南

### 基本用法

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Col, Row } from "uniubi-lib-mobile";

const App = () => {
  return (
    <Row>
      <Col span={8}>
        <Box>Col-8</Box>
      </Col>
      <Col span={8}>
        <Box>Col-8</Box>
      </Col>
      <Col span={8}>
        <Box>Col-8</Box>
      </Col>
      <Col span={6}>
        <Box>Col-6</Box>
      </Col>
      <Col span={6}>
        <Box>Col-6</Box>
      </Col>
      <Col span={6}>
        <Box>Col-6</Box>
      </Col>
      <Col span={6}>
        <Box>Col-6</Box>
      </Col>
    </Row>
  );
};
```

### 排版

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Col, Row } from "uniubi-lib-mobile";

type JustifyType =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";

const App = () => {
  const justifyTypes: JustifyType[] = [
    "start",
    "end",
    "center",
    "space-around",
    "space-between",
    "space-evenly",
  ];

  return (
    <View>
      {justifyTypes.map((type) => (
        <Row
          justify={type}
          key={type}
          style={{
            backgroundColor: "#f2f2f2",
            padding: "8px 0",
            margin: "8px 0",
          }}
        >
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
        </Row>
      ))}
    </View>
  );
};
```

### 对齐

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Col, Row } from "uniubi-lib-mobile";

type AlignType = "top" | "middle" | "bottom";

const App = () => {
  const alignTypes: AlignType[] = ["top", "middle", "bottom"];

  return (
    <View>
      {justifyTypes.map((type) => (
        <Row
          justify={type}
          key={type}
          style={{
            backgroundColor: "#f2f2f2",
            padding: "8px 0",
            margin: "8px 0",
          }}
        >
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
          <Col span={4}>
            <Box>Col-4</Box>
          </Col>
        </Row>
      ))}
    </View>
  );
};
```

### 栅格间距

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Col, Row } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#f2f2f2",
          padding: "8px 0",
          margin: "8px 0",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
        </Row>
      </View>
      <View
        style={{
          backgroundColor: "#f2f2f2",
          padding: "8px 0",
          margin: "8px 0",
        }}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
          <Col span={6}>
            <Box>Col-6</Box>
          </Col>
        </Row>
      </View>
    </View>
  );
};
```

### 左右偏移

```tsx
import { View } from "@tarojs/components";
import React, { useState } from "react";
import { Col, Row } from "uniubi-lib-mobile";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        padding: "8px 0",
        margin: "8px 0",
      }}
    >
      <Row>
        <Col span={8}>
          <Box>Col-8</Box>
        </Col>
        <Col span={8} offset={8}>
          <Box>Col-8</Box>
        </Col>
      </Row>
    </View>
  );
};
```

## API

### Row

| 参数名  | 说明         | 必填 | 类型                                                                                  | 默认值 | 备注 |
| ------- | ------------ | ---- | ------------------------------------------------------------------------------------- | ------ | ---- |
| gutter  | 栅格间隔     | N    | `number \| [number, number]`                                                          |        |      |
| justify | 水平排列方式 | N    | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` |        |      |
| align   | 垂直对齐方式 | N    | `'top' \| 'middle' \| 'bottom'`                                                       |        |      |

### Col

| 参数名 | 说明                                   | 必填 | 类型     | 默认值 | 备注 |
| ------ | -------------------------------------- | ---- | -------- | ------ | ---- |
| span   | 栅格占位格数                           | N    | `number` |        |      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | N    | `number` | `0`    |      |
