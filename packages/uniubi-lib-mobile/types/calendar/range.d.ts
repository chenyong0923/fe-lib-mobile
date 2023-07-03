import type { BaseCalendarProps, ValueRange } from './base';

export interface CalendarRangeProps<T extends CalendarType = 'day'>
  extends BaseCalendarProps<T> {
  onChange?: (value: ValueRange<T>) => void;
}

declare const CalendarRange: <T extends CalendarType = 'day'>(
  props: CalendarRangeProps<T>,
) => JSX.Element;

export default CalendarRange;
