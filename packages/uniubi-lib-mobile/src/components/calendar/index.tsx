import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { CalendarProps } from '../../../types/calendar';

const prefixCls = 'ulm-calendar';

const Calendar = ({ className, style }: CalendarProps) => {
  return (
    <View className={classnames(prefixCls, className)} style={style}>
      Calendar
    </View>
  );
};

export default Calendar;
