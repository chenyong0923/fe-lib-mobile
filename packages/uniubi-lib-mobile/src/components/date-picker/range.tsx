import classnames from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import React, { useMemo, useState } from 'react';

import { PREFIX } from '@/constants';

import PickerPanel from '../picker/Panel';
import PickerWrapper from '../picker/Wrapper';
import Tabs from '../tabs';
import { DEFAULT_MAX_DATE, DEFAULT_MIN_DATE } from './constants';
import useData from './useData';
import { createDateFromArray, getIndexArrayByValueArray } from './utils';

import type { PickerType } from '../../../types/date-picker/common';
import type {
  ActiveKeyType,
  DatePickerRangeProps,
  ValueType,
} from '../../../types/date-picker/range';

const prefixCls = `${PREFIX}-date-picker-range`;

const DatePickerRange = ({
  className,
  style,
  children,
  range = [DEFAULT_MIN_DATE, DEFAULT_MAX_DATE],
  type = 'date',
  value,
  onChange,
  onOk,
  onCancel,
  ...rest
}: DatePickerRangeProps) => {
  // 开始时间
  const [startTime, setStartTime] = useState<Dayjs>(dayjs());
  // 结束时间
  const [endTime, setEndTime] = useState<Dayjs>(dayjs());
  // 当前 tab 选中
  const [activeKey, setActiveKey] = useState<ActiveKeyType>('start');

  // 最终的值
  const _value: ValueType = useMemo(() => {
    if (Array.isArray(value)) {
      return value;
    }
    return [startTime, endTime];
  }, [value, startTime, endTime]);

  const { options, value: panelValue } = useData({
    type,
    value: activeKey === 'start' ? _value[0] : _value[1],
    range,
  });

  // 根据 index 获取 value
  const getValueFromIndex = (indexArray: number[]) => {
    return indexArray.map((item, index) => options[index]?.[item]?.value);
  };

  // 选中项改变触发回调
  const handleChange = (activeKeyType: ActiveKeyType, indexArray: number[]) => {
    const values = getValueFromIndex(indexArray);
    const date = createDateFromArray(values);
    const ret: ValueType = [..._value];
    if (activeKeyType === 'start') {
      setStartTime(date);
      ret[0] = date;
    } else {
      setEndTime(date);
      ret[1] = date;
    }
    onChange?.({ activeKeyType, value: date }, ret);
  };

  const handleOk = () => {
    let r: ValueType = [_value[0], _value[1]];
    // 如果开始时间大于结束时间，则交换
    if (_value[0].isAfter(_value[1])) {
      r = [_value[1], _value[0]];
      // 设置内部值
      setStartTime(_value[1]);
      setEndTime(_value[0]);
    }
    onOk?.(r);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  const formatMap: { [key in PickerType]: string } = {
    year: 'YYYY年',
    month: 'YYYY年MM月',
    date: 'YYYY年MM月DD日',
  };

  return (
    <PickerWrapper
      className={classnames(prefixCls, className)}
      style={style}
      title={`${_value[0] ? _value[0].format(formatMap[type]) : ''} - ${
        _value[1] ? _value[1].format(formatMap[type]) : ''
      }`}
      panel={
        <Tabs
          className={`${prefixCls}-tabs`}
          line={false}
          autoNavItemWidth={false}
          activeKey={activeKey}
          onChange={(k) => {
            setActiveKey(k);
          }}
        >
          <Tabs.Pane tab="开始时间" tabKey="start">
            <PickerPanel
              options={options}
              value={getIndexArrayByValueArray(options, panelValue)}
              onChange={(indexArray) => {
                handleChange('start', indexArray);
              }}
            />
          </Tabs.Pane>
          <Tabs.Pane tab="结束时间" tabKey="end">
            <PickerPanel
              options={options}
              value={getIndexArrayByValueArray(options, panelValue)}
              onChange={(indexArray) => {
                handleChange('end', indexArray);
              }}
            />
          </Tabs.Pane>
        </Tabs>
      }
      onOk={handleOk}
      onCancel={handleCancel}
      {...rest}
    >
      {children}
    </PickerWrapper>
  );
};

export default DatePickerRange;
