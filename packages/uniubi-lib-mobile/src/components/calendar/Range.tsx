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
  const [startTime, setStartTime] = useState<Dayjs>();

  const selected: ValueType = useMemo(() => {
    let ret: ValueType;
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
      setStartTime(undefined);
    } else {
      setStartTime(date);
    }
  };

  return <BaseCalendar value={selected} onSelect={handleSelect} {...rest} />;
};
export default CalendarRange;
