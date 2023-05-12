import { View } from '@tarojs/components';
import React, { type ReactNode } from 'react';

import styles from './index.module.less';

interface BasicLayoutProps {
  children?: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return <View className={styles.container}>{children}</View>;
};

export default BasicLayout;
