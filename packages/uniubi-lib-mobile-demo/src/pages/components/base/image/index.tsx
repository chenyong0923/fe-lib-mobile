import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React from 'react';
import { Image } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

import type { FC, PropsWithChildren } from 'react';
import type { ImageProps } from 'uniubi-lib-mobile/types/image';

const src =
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp';
const src2 = 'https://img.yzcdn.cn/vant/cat.jpeg';

const Box: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => (
  <View style={{ display: 'inline-block', margin: '0 8px 8px 0' }}>
    <View>{children}</View>
    {title && (
      <View style={{ textAlign: 'center', fontSize: Taro.pxTransform(28) }}>
        {title}
      </View>
    )}
  </View>
);

const Page = () => {
  const modes: Array<ImageProps['mode']> = [
    'scaleToFill',
    'aspectFit',
    'aspectFill',
  ];

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Image src={src} />
      </Section>
      <Section title="填充模式">
        <View>
          {modes.map((item) => (
            <Box key={item} title={item}>
              <Image src={src} mode={item} />
            </Box>
          ))}
        </View>
        <View>
          {modes.map((item) => (
            <Box key={item} title={item}>
              <Image src={src2} mode={item} />
            </Box>
          ))}
        </View>
      </Section>
      <Section title="图片放大预览">
        <Box title="默认">
          <Image src={src} preview />
        </Box>
        <Box title="自定义">
          <Image src={src} preview={{ urls: [src, src2] }} />
        </Box>
      </Section>
      <Section title="圆形图片">
        <Image src={src} round />
      </Section>
      <Section title="加载失败">
        <Box title="默认">
          <Image src="src" />
        </Box>
        <Box title="自定义">
          <Image src="src" fallback="加载失败" />
        </Box>
      </Section>
    </BasicLayout>
  );
};

export default Page;
