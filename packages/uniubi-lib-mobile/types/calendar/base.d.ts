import type { Dayjs } from 'dayjs';
import type { CSSProperties, FC, ReactNode } from 'react';

export type CalendarType = 'year' | 'month' | 'day';

export type ValueType<T extends CalendarType = 'day'> = T extends 'day'
  ? Dayjs
  : T extends 'month'
  ? string
  : T extends 'year'
  ? string
  : never;

export type ValueRange<T extends CalendarType> = [ValueType<T>, ValueType<T>];

export interface BaseCalendarProps<T extends CalendarType = 'day'> {
  className?: string;
  style?: CSSProperties;
  type?: T;
  value?: ValueRange<T>;
  min?: Dayjs;
  max?: Dayjs;
  slot?: ReactNode;
  onSelect?: (value: ValueType<T>) => void;
  onToggle?: (date?: Dayjs) => void;
  dateRender?: (date: Dayjs) => ReactNode;
}

declare const BaseCalendar: FC<BaseCalendarProps>;

export default BaseCalendar;
