import dayjs, { Dayjs } from 'dayjs';
import { useMemo, useState } from 'react';

import { getAllDate, getValueArrayByDate } from './utils';

import type { UseDataProps } from '../../../types/date-picker/useData';

const useData = ({ type, value, range }: UseDataProps) => {
  // 选中日期
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  // 最终选中的值
  const _value = useMemo(() => {
    const v = value !== undefined ? dayjs(value) : selectedDate;
    return getValueArrayByDate(type, v);
  }, [value, selectedDate, type]);

  // 计算选项
  const options = useMemo(() => {
    const [min, max] = range;
    // 年份选项
    const optionYear = Array.from(
      { length: max.year() - min.year() + 1 },
      (_, index) => {
        const year = min.year() + index;
        return {
          label: `${year}年`,
          value: year,
        };
      },
    );
    const optionMonth = Array.from({ length: 12 }, (_, index) => {
      const month = index + 1;
      return {
        label: `${month}月`,
        value: month,
      };
    });
    const ret = [optionYear];
    if (type === 'month') {
      ret.push(optionMonth);
    } else if (type === 'date') {
      ret.push(optionMonth);
      const dates = getAllDate(_value[0], _value[1]);
      ret.push(dates.map((item) => ({ label: `${item}日`, value: item })));
    }
    return ret;
  }, [range, type, _value]);

  return {
    value: _value,
    options,
    selectedDate,
    setSelectedDate,
  };
};

export default useData;
