import { View } from '@tarojs/components';
import React, { type ReactNode } from 'react';

import styles from './index.module.less';

interface SectionProps {
  title?: string;
  children?: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <View className={styles.section}>
      {title && <View className={styles.title}>{title}</View>}
      <View className={styles.body}>{children}</View>
    </View>
  );
};

export default Section;
