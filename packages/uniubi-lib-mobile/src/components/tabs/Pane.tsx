import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useContext } from 'react';

import { PREFIX } from '@/constants';
import { PaneProps } from '~/types/tabs/tabs-pane';

import TabsContext from './context';

import type { FC } from 'react';

const prefix = `${PREFIX}-tabs-pane`;

const Pane: FC<PaneProps> = ({ className, style, tabKey, children }) => {
  const { activeKey } = useContext(TabsContext);

  return (
    <View
      className={classnames(
        prefix,
        { [`${prefix}-active`]: tabKey === activeKey },
        className,
      )}
      style={style}
    >
      {children}
    </View>
  );
};

export default Pane;
