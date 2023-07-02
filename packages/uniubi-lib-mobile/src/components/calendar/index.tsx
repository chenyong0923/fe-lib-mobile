import dayjs from 'dayjs';
import React from 'react';

import BaseCalendar from './BaseCalendar';
import Range from './Range';

import type { CalendarProps } from '../../../types/calendar';
import type {
  CalendarType,
  ValueRange,
  ValueType,
} from '../../../types/calendar/base';

const Calendar = <T extends CalendarType = 'day'>({
  type = 'day' as T,
  value,
  onChange,
  onSelect,
  ...rest
}: CalendarProps<T>) => {
  const selected = [
    dayjs(value).startOf(type),
    dayjs(value).endOf(type),
  ] as ValueRange<T>;

  // 选中日期
  const handleSelect = (date: ValueType<T>) => {
    onChange?.(date);
    onSelect?.(date);
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

Calendar.Range = Range;

export default Calendar;
