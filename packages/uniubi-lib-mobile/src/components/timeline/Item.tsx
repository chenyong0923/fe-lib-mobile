import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import type { TimelineItemProps } from '../../../types/timeline/item';

const prefixCls = `${PREFIX}-timeline-item`;

const TimelineItem = ({
  className,
  style,
  icon,
  title,
  content,
}: TimelineItemProps) => {
  return (
    <View
      className={classnames(
        prefixCls,
        { [`${prefixCls}-custom`]: !!icon },
        className,
      )}
      style={style}
    >
      <View className={`${prefixCls}-icon`}>
        {icon ?? <View className={`${prefixCls}-icon-dot`} />}
      </View>
      <View className={`${prefixCls}-title`}>{title}</View>
      {content ? (
        <View className={`${prefixCls}-content`}>{content}</View>
      ) : null}
    </View>
  );
};

export default TimelineItem;
