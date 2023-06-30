import { type Dayjs } from 'dayjs';
import React, { useMemo, useState } from 'react';

import BaseCalendar from './BaseCalendar';

import type { ValueType } from '../../../types/calendar/base';
import type { CalendarRangeProps } from '../../../types/calendar/range';

const CalendarRange = ({
  value = [] as any,
  onChange,
  ...rest
}: CalendarRangeProps) => {
  // 选择的开始时间，只要存在，则说明在选择中
  const [startTime, setStartTime] = useState<Dayjs>();

  // 选中的日期
  const selected: ValueType = useMemo(() => {
    let ret: ValueType;
    // 如果内部开始时间存在，说明在选择中，此时选中的日期为开始时间当天
    if (startTime) {
      ret = [startTime.startOf('day'), startTime.endOf('day')];
    } else {
      ret = value;
    }
    return ret.sort((a, b) => a.valueOf() - b.valueOf());
  }, [value, startTime]);

  // 选中日期
  const handleSelect = (date: Dayjs) => {
    if (startTime) {
      const v = [startTime, date].sort(
        (a, b) => a.valueOf() - b.valueOf(),
      ) as ValueType;
      onChange?.(v);
      // 清空开始时间表示选择已完成
      setStartTime(undefined);
    } else {
      setStartTime(date);
    }
  };

  return <BaseCalendar value={selected} onSelect={handleSelect} {...rest} />;
};
export default CalendarRange;
