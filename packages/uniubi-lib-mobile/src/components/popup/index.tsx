import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { UPopupProps } from '~/types/popup';

const prefix = `${PREFIX}-popup`;

const Popup: React.FC<UPopupProps> = ({ children }) => {
  return <View className={classnames(prefix)}>{children}</View>;
};

export default Popup;
