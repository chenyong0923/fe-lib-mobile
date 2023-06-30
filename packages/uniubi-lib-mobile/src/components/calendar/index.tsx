import dayjs, { type Dayjs } from 'dayjs';
import React from 'react';

import BaseCalendar from './BaseCalendar';
import Range from './Range';

import type { CalendarProps } from '../../../types/calendar';
import type { ValueType } from '../../../types/calendar/base';

const Calendar = ({ value, onChange, onSelect, ...rest }: CalendarProps) => {
  const selected: ValueType = [
    dayjs(value).startOf('day'),
    dayjs(value).endOf('day'),
  ];

  // 选中日期
  const handelSelect = (date: Dayjs) => {
    onChange?.(date);
    onSelect?.(date);
  };

  return <BaseCalendar value={selected} onSelect={handelSelect} {...rest} />;
};

Calendar.Range = Range;

export default Calendar;
