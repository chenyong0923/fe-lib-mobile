import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React from 'react';
import { Col, Row } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Box: React.FC = ({ children }) => (
  <View
    style={{
      width: '100%',
      height: Taro.pxTransform(40),
      lineHeight: Taro.pxTransform(40),
      background: '#2228e0',
      color: '#fff',
      textAlign: 'center',
      fontSize: Taro.pxTransform(14),
    }}
  >
    {children}
  </View>
);

type JustifyType =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type AlignType = 'top' | 'middle' | 'bottom';

const Page = () => {
  const justifyTypes: JustifyType[] = [
    'start',
    'end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
  ];

  const alignTypes: AlignType[] = ['top', 'middle', 'bottom'];

  return (
    <BasicLayout>
      <Section title="基本用法">
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
      </Section>
      <Section title="排版">
        {justifyTypes.map((type) => (
          <Row
            justify={type}
            key={type}
            style={{
              backgroundColor: '#f2f2f2',
              padding: '8px 0',
              margin: '8px 0',
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
      </Section>
      <Section title="对齐">
        {alignTypes.map((type) => (
          <Row
            align={type}
            key={type}
            style={{
              backgroundColor: '#f2f2f2',
              margin: '8px 0',
              height: Taro.pxTransform(76),
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
      </Section>
      <Section title="栅格间距">
        <View
          style={{
            backgroundColor: '#f2f2f2',
            padding: '8px 0',
            margin: '8px 0',
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
            backgroundColor: '#f2f2f2',
            padding: '8px 0',
            margin: '8px 0',
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
      </Section>
      <Section title="左右偏移">
        <View
          style={{
            backgroundColor: '#f2f2f2',
            padding: '8px 0',
            margin: '8px 0',
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
      </Section>
    </BasicLayout>
  );
};

export default Page;
