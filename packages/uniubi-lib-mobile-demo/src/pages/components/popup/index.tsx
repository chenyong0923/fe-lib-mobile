import { View } from '@tarojs/components';
import React, { useState } from 'react';
import { Button, Popup } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Box = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        backgroundColor: '#c9c9c9',
      }}
    >
      Box
    </View>
  );
};

type PositionType = 'center' | 'top' | 'bottom' | 'left' | 'right';

const Page = () => {
  const [visible, setVisible] = useState<boolean>(false);

  // 弹出位置
  const [visible2, setVisible2] = useState<boolean>(false);
  const [position, setPosition] = useState<PositionType>('center');

  const openPosition = (p: PositionType) => {
    setPosition(p);
    setVisible2(true);
  };

  const [visible3, setVisible3] = useState<boolean>(false);

  const [visible4, setVisible4] = useState<boolean>(false);

  return (
    <BasicLayout>
      <Section title="基本用法">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          打开弹出层
        </Button>
        <Popup
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        >
          <Box />
        </Popup>
      </Section>
      <Section title="弹出位置">
        <Button
          onClick={() => {
            openPosition('top');
          }}
        >
          顶部弹出
        </Button>
        <Button
          onClick={() => {
            openPosition('bottom');
          }}
        >
          底部弹出
        </Button>
        <Button
          onClick={() => {
            openPosition('left');
          }}
        >
          左侧弹出
        </Button>
        <Button
          onClick={() => {
            openPosition('right');
          }}
        >
          右侧弹出
        </Button>
        <Popup
          visible={visible2}
          position={position}
          onClose={() => {
            setVisible2(false);
          }}
        >
          <Box />
        </Popup>
      </Section>
      <Section title="不需要遮照">
        <Button
          onClick={() => {
            setVisible3(true);
          }}
        >
          打开弹出层
        </Button>
        <Popup visible={visible3} overlay={false}>
          <Box />
        </Popup>
      </Section>
      <Section title="点击遮照不关闭">
        <Button
          onClick={() => {
            setVisible4(true);
          }}
        >
          打开弹出层
        </Button>
        <Popup
          visible={visible4}
          closeOnClickOverlay={false}
          onClose={() => {
            setVisible4(false);
          }}
        >
          <Box />
        </Popup>
      </Section>
    </BasicLayout>
  );
};

export default Page;
