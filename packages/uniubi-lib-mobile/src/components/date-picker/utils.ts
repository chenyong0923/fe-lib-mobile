import dayjs, { type Dayjs } from 'dayjs';

import type { PickerType } from '~/types/date-picker/common';
import type { Option } from '~/types/picker';

/**
 * 根据指定年月获取当前月份所有的日期
 * @param year 年
 * @param month 月
 * @returns 日期数组
 */
export const getAllDate = (year: number, month: number) => {
  const daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
  const dates: number[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }
  return dates;
};

/**
 * 根据年月日的数组创建日期对象
 * @param arr 年月日索引数组
 * @returns 日期对象
 */
export const createDateFromArray = (arr: number[]) => {
  const [year, month, day] = arr;
  let dateStr = '';
  if (year) dateStr += year;
  if (month) dateStr += `-${month}`;
  if (day) dateStr += `-${day}`;
  return dayjs(dateStr);
};

/**
 * 从日期对象中获取年月日的数组
 * @param type 要获取数组的类型，如果是年，返回一个元素，如果是月，返回两个元素，如果是日，返回三个元素
 * @param date 日期对象
 */
export const getValueArrayByDate = (type: PickerType, date: Dayjs) => {
  const result: number[] = [];
  if (type === 'year') {
    result.push(date.year());
  } else if (type === 'month') {
    result.push(date.year(), date.month() + 1);
  } else if (type === 'date') {
    result.push(date.year(), date.month() + 1, date.date());
  }
  return result;
};

/**
 * 根据选项数组和值数组获取索引数组
 * @param options 选项数组
 * @param valueArray 值数组
 * @returns 索引数组
 */
export const getIndexArrayByValueArray = (
  options: Array<Array<Option<number>>>,
  valueArray: number[],
) => {
  return valueArray.map((value, index) => {
    const i = options[index].findIndex((item) => item.value === value);
    return i ?? 0;
  });
};
