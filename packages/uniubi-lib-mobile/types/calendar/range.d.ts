import type { BaseCalendarProps, ValueType } from './base';
import type { FC } from 'react';

export interface CalendarRangeProps extends BaseCalendarProps {
  onChange?: (value: ValueType) => void;
}

declare const CalendarRange: FC<CalendarRangeProps>;

export default CalendarRange;
