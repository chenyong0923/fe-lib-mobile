import type { CSSProperties, FC } from 'react';

export interface CalendarProps {
  className?: string;
  style?: CSSProperties;
}

declare const Calendar: FC<CalendarProps>;

export default Calendar;
