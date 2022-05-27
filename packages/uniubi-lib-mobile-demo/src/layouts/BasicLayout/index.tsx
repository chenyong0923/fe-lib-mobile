import { View } from '@tarojs/components';
import React from 'react';

import styles from './index.module.less';

const BasicLayout: React.FC = ({ children }) => {
  return <View className={styles.container}>{children}</View>;
};

export default BasicLayout;
