import type { Dayjs } from 'dayjs';
import type { CSSProperties, FC, ReactNode } from 'react';

export type CalendarType = 'year' | 'month' | 'date';

export type ValueType = [Dayjs, Dayjs];

export interface BaseCalendarProps {
  className?: string;
  style?: CSSProperties;
  type?: CalendarType;
  value?: ValueType;
  min?: Dayjs;
  max?: Dayjs;
  onSelect?: (value: Dayjs) => void;
  dateRender?: (date: Dayjs) => ReactNode;
}

declare const BaseCalendar: FC<BaseCalendarProps>;

export default BaseCalendar;
