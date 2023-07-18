import dayjs, { type Dayjs } from 'dayjs';

import { OPTIONS } from './contants';

/**
 * 根据索引数组获取时间
 * @param indexArray 索引数组
 * @returns 时间
 */
export const getTimeByIndexArray = (indexArray: number[]) => {
  const timeArray = indexArray.map(
    (item, index) => OPTIONS[index]?.[item]?.value,
  );
  return getTimeByTimeArray(timeArray);
};

/**
 * 根据时间数组获取时间
 * @param timeArray 时间数组
 * @returns 时间
 */
export const getTimeByTimeArray = (timeArray: number[]) => {
  const [hour, minute, second] = timeArray;
  return dayjs().hour(hour).minute(minute).second(second);
};

/**
 * 根据时间获取索引数组
 * @param time 时间
 * @returns 索引数组
 */
export const getIndexArrayByTime = (time: Dayjs) => {
  const timeArray = [time.hour(), time.minute(), time.second()];
  return getIndexArrayByTimeArray(timeArray);
};

/**
 * 根据时间获取索引数组
 * @param timeArray 时间数组
 * @returns 索引数组
 */
export const getIndexArrayByTimeArray = (timeArray: number[]) => {
  return timeArray.map((item, index) => {
    const options = OPTIONS[index];
    const i = options.findIndex((option) => option.value === item);
    return i ?? 0;
  });
};
