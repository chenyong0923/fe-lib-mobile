import Range from './range';

import type { BaseCalendarProps } from './base';
import type { Dayjs } from 'dayjs';

export interface CalendarProps extends BaseCalendarProps {
  defaultValue?: Dayjs;
  value?: Dayjs;
  onChange?: (value: Dayjs) => void;
}

declare const Calendar: ((props: CalendarProps) => JSX.Element) & {
  Range: typeof Range;
};

export default Calendar;
