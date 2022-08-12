import { View } from '@tarojs/components';
import React from 'react';
import { Empty } from 'uniubi-lib-mobile';

import Section from '@/components/Section';
import BasicLayout from '@/layouts/BasicLayout';

const Page = () => {
  return (
    <BasicLayout>
      <Section title="基础使用">
        <Empty />
      </Section>
      <Section title="自定义Empty1">
        <Empty
          src="https://fe-cloud.uni-ubi.com/image/1653976906613-meeting.png?x-oss-process=img/q/80"
          height={210}
          mode="heightFix"
          tip="暂无会议"
        />
      </Section>
      <Section title="自定义Empty2">
        <Empty
          src="https://fe-cloud.uni-ubi.com/image/1653976906613-meeting.png?x-oss-process=img/q/80"
          width={210}
          height={210}
          tip={
            <View style={{ display: 'flex' }}>
              <View>暂无会议，</View>
              <View style={{ color: '#2228e0' }}>立即预约</View>
            </View>
          }
        />
      </Section>
    </BasicLayout>
  );
};

export default Page;
