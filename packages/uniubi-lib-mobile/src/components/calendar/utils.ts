import dayjs from 'dayjs';

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
  const dayOfFirstDay = currentMonthDate.at(0)!.day();
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
