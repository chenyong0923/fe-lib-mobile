import Range from './range';

import type { BaseCalendarProps, CalendarType, ValueType } from './base';

export interface CalendarProps<T extends CalendarType = 'day'>
  extends BaseCalendarProps<T> {
  value?: ValueType<T>;
  onChange?: (value: ValueType<T>) => void;
}

declare const Calendar: (<T extends CalendarType = 'day'>(
  props: CalendarProps<T>,
) => JSX.Element) & {
  Range: typeof Range;
};

export default Calendar;
