import { ScrollView, View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { ListProps } from '~/types/list';

const prefix = `${PREFIX}-empty`;

const List: React.FC<ListProps> = (props) => {
  const { className, style, lastTip, enableLastTip } = props;
  return (
    <ScrollView
      className={classnames(prefix, className)}
      style={style}
      scrollY
      refresherEnabled
      refresherDefaultStyle={'none'}
      refresherBackground={'#f8f8f8'}
      enhanced
      // @ts-ignore
      refresher={<View style={{ height: 80 }}>refresh</View>}
    >
      {enableLastTip && <View>—— {lastTip || '到底啦'} ——</View>}
    </ScrollView>
  );
};

export default List;
