import dayjs, { type Dayjs } from 'dayjs';

import type { CalendarType } from '../../../types/calendar/base';

/**
 * 根据月份生成日历数据
 * @param month 需要生成日历的月份
 * @returns 日历数据
 */
export const generateDate = (month: string) => {
  // 当前月份所有天数
  const daysInMonth = dayjs(month).daysInMonth();
  const currentMonthDate = Array.from({ length: daysInMonth }).map((_, index) =>
    dayjs(month).date(index + 1),
  );
  // 当前月第一天是星期几
  const dayOfFirstDay = currentMonthDate[0]!.day();
  // 需要补充上个月的天数
  const prevMonthDate = Array.from({ length: dayOfFirstDay }).map((_, index) =>
    dayjs(month)
      .subtract(1, 'month')
      .endOf('month')
      .subtract(dayOfFirstDay - index - 1, 'day'),
  );
  // 需要补充下个月的天数
  const nextMonthDate = Array.from({
    length: 42 - currentMonthDate.length - prevMonthDate.length,
  }).map((_, index) =>
    dayjs(month).add(1, 'month').startOf('month').add(index, 'day'),
  );
  return [...prevMonthDate, ...currentMonthDate, ...nextMonthDate];
};

/**
 * 根据年份生成月份日历数据
 * @param year 需要生成日历的年份
 * @returns 月份日历数据
 */
export const generateMonth = (year: number) => {
  return Array.from({ length: 12 }).map((_, index) =>
    dayjs().year(year).month(index),
  );
};

/**
 * 生成年份日历数据
 * @param num 与当前年份的页数差值
 * @returns 年份日历数据
 */
export const generateYear = (num: number) => {
  // 单页16条数据
  const size = 16;
  return Array.from({ length: size })
    .map((_, index) => dayjs().year(dayjs().year() + num * size - index))
    .reverse();
};

/**
 * 判断日期是否相同
 * @param d1 日期1
 * @param d2 日期2
 * @param t 比较的类型
 * @returns 是否相同
 */
export const isSameDate = (d1: Dayjs, d2: Dayjs, t: CalendarType = 'day') => {
  if (!d1 || !d2) return false;
  if (t === 'day') {
    return (
      d1.isSame(d2, 'year') && d1.isSame(d2, 'month') && d1.isSame(d2, 'day')
    );
  } else if (t === 'month') {
    return d1.isSame(d2, 'year') && d1.isSame(d2, 'month');
  } else if (t === 'year') {
    return d1.isSame(d2, 'year');
  } else {
    return undefined as never;
  }
};
