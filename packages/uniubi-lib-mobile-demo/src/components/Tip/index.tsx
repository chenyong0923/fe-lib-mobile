import { View } from '@tarojs/components';
import React from 'react';

import styles from './index.module.less';

import type { FC, PropsWithChildren } from 'react';

const Tip: FC<PropsWithChildren> = ({ children }) => {
  return <View className={styles.tip}>{children}</View>;
};

export default Tip;
