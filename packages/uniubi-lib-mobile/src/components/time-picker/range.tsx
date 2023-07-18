import classnames from 'classnames';
import dayjs, { type Dayjs } from 'dayjs';
import React, { useMemo, useState } from 'react';

import { FORMAT_TIME, PREFIX } from '@/constants';

import PickerPanel from '../picker/Panel';
import PickerWrapper from '../picker/Wrapper';
import Tabs from '../tabs';
import { OPTIONS } from './contants';
import { getIndexArrayByTime, getTimeByIndexArray } from './utils';

import type {
  ActiveKeyType,
  TimePickerRangeProps,
  ValueType,
} from '../../../types/time-picker/range';

const prefixCls = `${PREFIX}-time-picker-range`;

const TimePickerRange = ({
  className,
  style,
  children,
  value,
  onChange,
  onOk,
  onCancel,
  ...rest
}: TimePickerRangeProps) => {
  // 开始时间
  const [startTime, setStartTime] = useState<Dayjs>(dayjs());
  // 结束时间
  const [endTime, setEndTime] = useState<Dayjs>(dayjs());
  // 当前 tab 选中
  const [activeKey, setActiveKey] = useState<ActiveKeyType>('start');

  // 最终选中的值
  const _value: ValueType = useMemo(() => {
    if (Array.isArray(value)) {
      return value;
    }
    return [startTime, endTime];
  }, [value, startTime, endTime]);

  const handleChange = (activeKeyType: ActiveKeyType, indexArray: number[]) => {
    const time = getTimeByIndexArray(indexArray);
    const ret: ValueType = [..._value];
    if (activeKeyType === 'start') {
      setStartTime(time);
      ret[0] = time;
    } else {
      setEndTime(time);
      ret[1] = time;
    }
    onChange?.({ activeKeyType, value: time }, ret);
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

  return (
    <PickerWrapper
      className={classnames(prefixCls, className)}
      style={style}
      title={`${_value[0] ? _value[0].format(FORMAT_TIME) : ''} - ${
        _value[1] ? _value[1].format(FORMAT_TIME) : ''
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
              options={OPTIONS}
              value={getIndexArrayByTime(_value[0])}
              onChange={(indexArray) => {
                handleChange('start', indexArray);
              }}
            />
          </Tabs.Pane>
          <Tabs.Pane tab="结束时间" tabKey="end">
            <PickerPanel
              options={OPTIONS}
              value={getIndexArrayByTime(_value[1])}
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

export default TimePickerRange;
