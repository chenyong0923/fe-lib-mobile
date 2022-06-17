import { View } from '@tarojs/components';
import React from 'react';
import { Image } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const src =
  'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp';
const src2 = 'https://img.yzcdn.cn/vant/cat.jpeg';

const Box: React.FC<{ title?: string }> = ({ title, children }) => (
  <View style={{ display: 'inline-block', margin: '0 8px 8px 0' }}>
    <View style={{ width: 100, height: 100 }}>{children}</View>
    {title && (
      <View style={{ textAlign: 'center', fontSize: 14 }}>{title}</View>
    )}
  </View>
);

const Page = () => {
  const modes = ['scaleToFill', 'aspectFit', 'aspectFill'];

  return (
    <BasicLayout>
      <Section title="基础使用">
        <Image width={100} height={100} src={src} />
      </Section>
      <Section title="填充模式">
        <View>
          {modes.map((item) => (
            <Box key={item} title={item}>
              <Image width={100} height={100} src={src} mode={item} />
            </Box>
          ))}
        </View>
        <View>
          {modes.map((item) => (
            <Box key={item} title={item}>
              <Image width={100} height={100} src={src2} mode={item} />
            </Box>
          ))}
        </View>
      </Section>
      <Section title="图片放大预览">
        <Box title="默认">
          <Image width={100} height={100} src={src} preview />
        </Box>
        <Box title="自定义预览配置">
          <Image
            width={100}
            height={100}
            src={src}
            preview={{ urls: [src, src2] }}
          />
        </Box>
      </Section>
      <Section title="圆形图片">
        <Image width={100} height={100} src={src} round />
      </Section>
      <Section title="加载失败">
        <Box title="默认">
          <Image width={100} height={100} src="src" />
        </Box>
        <Box title="自定义内容">
          <Image width={100} height={100} src="src" fallback="加载失败" />
        </Box>
      </Section>
    </BasicLayout>
  );
};

export default Page;
