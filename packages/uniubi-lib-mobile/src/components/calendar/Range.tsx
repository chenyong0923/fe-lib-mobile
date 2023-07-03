import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';

import BaseCalendar from './BaseCalendar';

import type {
  CalendarType,
  ValueRange,
  ValueType,
} from '../../../types/calendar/base';
import type { CalendarRangeProps } from '../../../types/calendar/range';

const CalendarRange = <T extends CalendarType = 'day'>({
  type = 'day' as T,
  value = [] as any,
  onChange,
  ...rest
}: CalendarRangeProps<T>) => {
  // 选择的开始时间，只要存在，则说明在选择中
  const [startTime, setStartTime] = useState<ValueType<T>>();

  // 选中的日期
  const selected: ValueRange<T> = useMemo(() => {
    let ret: ValueRange<T>;
    // 如果内部开始时间存在，说明在选择中，此时选中的日期为开始时间当天
    if (startTime) {
      ret = [
        dayjs.isDayjs(startTime)
          ? (startTime.startOf(type) as ValueType<T>)
          : startTime,
        dayjs.isDayjs(startTime)
          ? (startTime.startOf(type) as ValueType<T>)
          : startTime,
      ];
    } else {
      ret = value;
    }
    return ret.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());
  }, [value, startTime]);

  // 选中日期
  const handleSelect = (date: ValueType<T>) => {
    if (startTime) {
      const v = [startTime, date].sort(
        (a, b) => dayjs(a).valueOf() - dayjs(b).valueOf(),
      ) as ValueRange<T>;
      onChange?.(v);
      // 清空开始时间表示选择已完成
      setStartTime(undefined);
    } else {
      setStartTime(date);
    }
  };

  return (
    <BaseCalendar
      type={type}
      value={selected}
      onSelect={handleSelect}
      {...rest}
    />
  );
};
export default CalendarRange;
