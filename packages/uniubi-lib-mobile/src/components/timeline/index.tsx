import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import Item from './Item';

import type { TimelineProps } from '../../../types/timeline';

const prefixCls = `${PREFIX}-timeline`;

const Timeline = ({ className, style, children }: TimelineProps) => {
  return (
    <View className={classnames(prefixCls, className)} style={style}>
      {React.Children.map(children, (child) => {
        // 判断传入的组件名是否为 Timeline.Item，如果是则渲染，否则不渲染
        if (React.isValidElement(child) && child.type === Timeline.Item) {
          return React.cloneElement(child);
        }
        return null;
      })}
    </View>
  );
};

Timeline.Item = Item;

export default Timeline;
