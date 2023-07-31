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

import { FORMAT_DATE, FORMAT_MONTH, FORMAT_YEAR, PREFIX } from '@/constants';

import { WEEK_MAP } from './contants';
import { generateDate, generateMonth, generateYear, isSameDate } from './utils';

import type {
  BaseCalendarProps,
  CalendarType,
  ValueType,
} from '../../../types/calendar/base';

const prefixCls = `${PREFIX}-calendar`;
dayjs.extend(isBetween);

const BaseCalendar = <T extends CalendarType = 'day'>({
  className,
  style,
  type = 'day' as T,
  value = [] as any,
  min,
  max,
  slot,
  onSelect,
  onToggle,
  dateRender,
}: BaseCalendarProps<T>) => {
  // 当前显示的日期
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  // 当类型为年时，用于翻页计数
  const [index, setIndex] = useState<number>(0);

  // 头部显示的值
  const formatHeaderValue = useMemo(() => {
    const formatMap = {
      year: '请选择',
      month: 'YYYY年',
      day: 'YYYY年 MM月',
    };
    return currentDate ? dayjs(currentDate).format(formatMap[type]) : null;
  }, [type, currentDate]);

  // 日历数据
  const data = useMemo(() => {
    if (type === 'year') {
      return generateYear(index);
    } else if (type === 'month') {
      return generateMonth(currentDate.year());
    } else if (type === 'day') {
      return generateDate(currentDate.format(FORMAT_MONTH));
    } else {
      return [];
    }
  }, [currentDate, index, type]);

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
    return date.isBetween(dayjs(start), dayjs(end), type, '[]');
  };

  // 日期是否置灰
  const isGray = (date: Dayjs) => {
    if (min || max) return false;
    if (type !== 'day') return false;
    return !date.isBetween(
      currentDate.startOf('month'),
      currentDate.endOf('month'),
      'day',
      '[]',
    );
  };

  // 选中日期
  const handleSelect = (date: Dayjs) => {
    if (!isInRange(date)) return;
    const v = formatValue(date);
    onSelect?.(v);
    setCurrentDate(date);
  };

  // 格式化返回数据
  const formatValue = (date: Dayjs) => {
    if (type === 'year') {
      return date.format(FORMAT_YEAR) as ValueType<T>;
    } else if (type === 'month') {
      return date.format(FORMAT_MONTH) as ValueType<T>;
    } else if (type === 'day') {
      return date as ValueType<T>;
    } else {
      return null as never;
    }
  };

  // 渲染日历数据
  const renderDate = (date: Dayjs) => {
    if (type === 'year') {
      return `${date.year()}年`;
    } else if (type === 'month') {
      return `${date.month() + 1}月`;
    } else if (type === 'day') {
      return date.date();
    } else {
      return null as never;
    }
  };

  // 渲染日期自定义内容
  const renderCustomContent = (date: Dayjs) => {
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
    <View
      className={classnames(prefixCls, `${prefixCls}-${type}`, className)}
      style={style}
    >
      <View className={`${prefixCls}-header`}>
        {type === 'day' && (
          <DoubleLeftOutlined
            className={classnames(
              `${prefixCls}-header-icon`,
              `${prefixCls}-header-icon-prev-year`,
            )}
            onClick={() => {
              const d = dayjs(currentDate).subtract(1, 'year');
              // 向前一年
              setCurrentDate(d);
              onToggle?.(d);
            }}
          />
        )}
        <LeftOutlined
          className={classnames(
            `${prefixCls}-header-icon`,
            `${prefixCls}-header-icon-prev-month`,
          )}
          onClick={() => {
            if (type === 'day') {
              const d = dayjs(currentDate).subtract(1, 'month');
              // 向前一个月
              setCurrentDate(d);
              onToggle?.(d);
            } else if (type === 'month') {
              const d = dayjs(currentDate).subtract(1, 'year');
              // 向前一年
              setCurrentDate(d);
              onToggle?.(d);
            } else if (type === 'year') {
              setIndex((prev) => prev - 1);
              onToggle?.();
            }
          }}
        />
        <Text className={`${prefixCls}-header-title`}>{formatHeaderValue}</Text>
        <RightOutlined
          className={classnames(
            `${prefixCls}-header-icon`,
            `${prefixCls}-header-icon-next-month`,
          )}
          onClick={() => {
            if (type === 'day') {
              const d = dayjs(currentDate).add(1, 'month');
              // 向后一个月
              setCurrentDate(d);
              onToggle?.(d);
            } else if (type === 'month') {
              const d = dayjs(currentDate).add(1, 'year');
              // 向后一年
              setCurrentDate(d);
              onToggle?.(d);
            } else if (type === 'year') {
              setIndex((prev) => prev + 1);
              onToggle?.();
            }
          }}
        />
        {type === 'day' && (
          <DoubleRightOutlined
            className={classnames(
              `${prefixCls}-header-icon`,
              `${prefixCls}-header-icon-next-year`,
            )}
            onClick={() => {
              const d = dayjs(currentDate).add(1, 'year');
              // 向后一年
              setCurrentDate(d);
              onToggle?.(d);
            }}
          />
        )}
      </View>
      {slot ? <View className={`${prefixCls}-slot`}>{slot}</View> : null}
      <View className={`${prefixCls}-main`}>
        {type === 'day' && (
          <View className={`${prefixCls}-main-header`}>
            {Array.from(WEEK_MAP).map((w) => (
              <View className={`${prefixCls}-main-cell`} key={w[0]}>
                {w[1]}
              </View>
            ))}
          </View>
        )}
        <View className={`${prefixCls}-main-body`}>
          {data.map((date) => (
            <View
              className={classnames(`${prefixCls}-main-cell`, {
                // 如果有最小值或最大值，则置灰非返回内的日期
                // 如果没有最小值和最大值，则置灰非当前月份的日期
                [`${prefixCls}-main-cell-gray`]: isGray(date),
                [`${prefixCls}-main-cell-selected`]: isSelected(date),
                [`${prefixCls}-main-cell-selected-start`]: isSameDate(
                  date,
                  dayjs(value?.[0]),
                  type,
                ),
                [`${prefixCls}-main-cell-selected-end`]: isSameDate(
                  date,
                  dayjs(value?.[1]),
                  type,
                ),
                [`${prefixCls}-main-cell-disabled`]: !isInRange(date),
              })}
              key={date.format(FORMAT_DATE)}
              onClick={() => {
                handleSelect(date);
              }}
            >
              <View className={`${prefixCls}-main-cell-inner`}>
                {renderDate(date)}
              </View>
              {/* 自定义渲染内容 */}
              {renderCustomContent(date)}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BaseCalendar;
