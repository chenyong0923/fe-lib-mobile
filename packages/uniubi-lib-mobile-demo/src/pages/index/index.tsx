import { View } from '@tarojs/components';
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from '@uniubi/icons-taro';
import React from 'react';

import styles from './index.module.less';

const Index: React.FC = () => {
  return (
    <View className={styles.container}>
      <LeftOutlined />
      <RightOutlined />
      <UpOutlined />
      <DownOutlined />
    </View>
  );
};

export default Index;
