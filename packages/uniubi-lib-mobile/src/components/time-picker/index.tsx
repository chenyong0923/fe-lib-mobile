import classnames from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import React, { useMemo, useState } from 'react';

import { PREFIX } from '@/constants';

import { TimePickerProps } from '../../../types/time-picker';
import Picker from '../picker';
import { OPTIONS } from './contants';
import Range from './range';
import { getTimeByIndexArray, getTimeByTimeArray } from './utils';

const prefixCls = `${PREFIX}-time-picker`;

const TimePicker = ({
  className,
  style,
  children,
  value,
  onChange,
  onOk,
  ...rest
}: TimePickerProps) => {
  // 选中时间
  const [selectedTime, setSelectedTime] = useState<Dayjs>(dayjs());

  const _value = useMemo(() => {
    const v = value !== undefined ? dayjs(value) : selectedTime;
    return [v.hour(), v.minute(), v.second()];
  }, [value, selectedTime]);

  const handleChange = (t: Dayjs) => {
    setSelectedTime(t);
    onChange?.(t);
  };

  const handleOk = () => {
    const time = getTimeByTimeArray(_value);
    onOk?.(time);
  };

  return (
    <Picker
      className={classnames(prefixCls, className)}
      style={style}
      options={OPTIONS}
      value={_value}
      onChange={(indexArray) => {
        const time = getTimeByIndexArray(indexArray);
        handleChange(time);
      }}
      onOk={handleOk}
      {...rest}
    >
      {children}
    </Picker>
  );
};

TimePicker.Range = Range;

export default TimePicker;
