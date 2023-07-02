import { Text, View } from '@tarojs/components';
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@uniubi/icons-taro';
import classnames from 'classnames';
import dayjs, { type Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import React, { useMemo, useState } from 'react';

import { FORMAT_DATE, FORMAT_MONTH, PREFIX } from '@/constants';

import { WEEK_MAP } from './contants';
import { generateDate, isSameDate } from './utils';

import type { BaseCalendarProps } from '../../../types/calendar/base';

const prefixCls = `${PREFIX}-calendar`;
dayjs.extend(isBetween);

const BaseCalendar = ({
  className,
  style,
  type = 'date',
  value = [] as any,
  min,
  max,
  onSelect,
  dateRender,
}: BaseCalendarProps) => {
  // 当前显示的日期
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  // 头部显示的值
  const formatHeaderValue = useMemo(() => {
    const formatMap = {
      year: '请选择',
      month: 'YYYY年',
      date: 'YYYY年 MM月',
    };
    return currentDate ? dayjs(currentDate).format(formatMap[type]) : null;
  }, [type, currentDate]);

  // 判断日期是否在范围内
  const isInRange = (date: Dayjs) => {
    const _min = min ? min.startOf('day') : null;
    const _max = max ? max.endOf('day') : null;
    return date.isBetween(_min, _max, 'day', '[]');
  };

  // 判断日期是否被选中
  const isSelected = (date: Dayjs) => {
    const [start, end] = value;
    // 开始时间和结束时间都不存在时，不选中
    if (!start && !end) return false;
    // 只要有一个存在，就可以判断是否选中，因为存在范围选择时的中间态
    return date.isBetween(start, end, 'day', '[]');
  };

  // 日期是否置灰
  const isGray = (date: Dayjs) => {
    if (min || max) return false;
    return !date.isBetween(
      currentDate.startOf('month'),
      currentDate.endOf('month'),
      'day',
      '[]',
    );
  };

  // 选中日期
  const handelSelect = (date: Dayjs) => {
    if (!isInRange(date)) return;
    onSelect?.(date);
    setCurrentDate(date);
  };

  // 渲染日期自定义内容
  const renderDate = (date: Dayjs) => {
    if (typeof dateRender !== 'function') {
      return null;
    }
    return (
      <View className={`${prefixCls}-main-cell-custom`}>
        {dateRender(date)}
      </View>
    );
  };

  return (
    <View className={classnames(prefixCls, className)} style={style}>
      <View className={`${prefixCls}-header`}>
        <DoubleLeftOutlined
          className={classnames(
            `${prefixCls}-header-icon`,
            `${prefixCls}-header-icon-prev-year`,
          )}
          onClick={() => {
            // 向前一年
            setCurrentDate((prev) => dayjs(prev).subtract(1, 'year'));
          }}
        />
        <LeftOutlined
          className={classnames(
            `${prefixCls}-header-icon`,
            `${prefixCls}-header-icon-prev-month`,
          )}
          onClick={() => {
            // 向前一个月
            setCurrentDate((prev) => dayjs(prev).subtract(1, 'month'));
          }}
        />
        <Text className={`${prefixCls}-header-title`}>{formatHeaderValue}</Text>
        <RightOutlined
          className={classnames(
            `${prefixCls}-header-icon`,
            `${prefixCls}-header-icon-next-month`,
          )}
          onClick={() => {
            // 向后一个月
            setCurrentDate((prev) => dayjs(prev).add(1, 'month'));
          }}
        />
        <DoubleRightOutlined
          className={classnames(
            `${prefixCls}-header-icon`,
            `${prefixCls}-header-icon-next-year`,
          )}
          onClick={() => {
            // 向后一年
            setCurrentDate((prev) => dayjs(prev).add(1, 'year'));
          }}
        />
      </View>
      <View className={`${prefixCls}-main`}>
        <View className={`${prefixCls}-main-header`}>
          {Array.from(WEEK_MAP).map((w) => (
            <View className={`${prefixCls}-main-cell`} key={w[0]}>
              {w[1]}
            </View>
          ))}
        </View>
        <View className={`${prefixCls}-main-body`}>
          {generateDate(currentDate.format(FORMAT_MONTH)).map((date) => (
            <View
              className={classnames(`${prefixCls}-main-cell`, {
                // 如果有最小值或最大值，则置灰非返回内的日期
                // 如果没有最小值和最大值，则置灰非当前月份的日期
                [`${prefixCls}-main-cell-gray`]: isGray(date),
                [`${prefixCls}-main-cell-selected`]: isSelected(date),
                [`${prefixCls}-main-cell-selected-start`]: isSameDate(
                  date,
                  value?.[0],
                ),
                [`${prefixCls}-main-cell-selected-end`]: isSameDate(
                  date,
                  value?.[1],
                ),
                [`${prefixCls}-main-cell-disabled`]: !isInRange(date),
              })}
              key={date.format(FORMAT_DATE)}
              onClick={() => {
                handelSelect(date);
              }}
            >
              <View className={`${prefixCls}-main-cell-inner`}>
                {date.date()}
              </View>
              {/* 自定义渲染内容 */}
              {renderDate(date)}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BaseCalendar;
