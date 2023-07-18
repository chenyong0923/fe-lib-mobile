import classnames from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';

import { PREFIX } from '@/constants';

import { DatePickerProps } from '../../../types/date-picker';
import Picker from '../picker';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from './constants';
import Range from './range';
import useData from './useData';

const prefixCls = `${PREFIX}-date-picker`;

const DatePicker = ({
  className,
  style,
  children,
  range = [DEFAULT_MIN_DATE, DEFAULT_MAX_DATE],
  type = 'date',
  value,
  onChange,
  onOk,
  ...rest
}: DatePickerProps) => {
  const {
    options,
    value: _value,
    setSelectedDate,
  } = useData({ type, value, range });

  const handleChange = (d: Dayjs) => {
    setSelectedDate(d);
    onChange?.(d);
  };

  const handleOk = () => {
    const date = dayjs(_value.join('-'));
    onOk?.(date);
  };

  return (
    <Picker
      className={classnames(prefixCls, className)}
      style={style}
      options={options}
      value={_value}
      onChange={(v) => {
        const date = dayjs(v.join('-'));
        handleChange(date);
      }}
      onOk={handleOk}
      {...rest}
    >
      {children}
    </Picker>
  );
};

DatePicker.Range = Range;

export default DatePicker;
