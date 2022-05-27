import { View } from '@tarojs/components';
import React from 'react';

import styles from './index.module.less';

interface SectionProps {
  title?: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <View className={styles.section}>
      {title && <View className={styles.title}>{title}</View>}
      <View>{children}</View>
    </View>
  );
};

export default Section;
