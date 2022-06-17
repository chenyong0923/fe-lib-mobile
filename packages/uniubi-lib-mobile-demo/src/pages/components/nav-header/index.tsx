import { HomeOutlined } from '@uniubi/icons-taro';
import React from 'react';
import { NavHeader } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <NavHeader title="默认标题" backTip="返回" statusBarHeight={20} />
      </Section>
      <Section title="标题超长">
        <NavHeader title="标题超长标题超长标题超长标题超长" />
      </Section>
      <Section title="背景颜色">
        <NavHeader
          title="默认标题"
          backgroundColor={'#2228e0'}
          fontColor={'#ffffff'}
        />
      </Section>
      <Section title="标题居左">
        <NavHeader title="默认标题" titlePosition="left" />
      </Section>
      <Section title="仅有一个页面时返回首页">
        <NavHeader title="默认标题" homePath="/pages/index/index" />
      </Section>
      <Section title="不显示返回按钮">
        <NavHeader title="默认标题" hiddenBack />
      </Section>
      <Section title="返回按钮修改">
        <NavHeader
          title="默认标题"
          backIcon={<HomeOutlined style={{ fontSize: '22px' }} />}
          onBack={() => {
            alert?.('111');
          }}
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
