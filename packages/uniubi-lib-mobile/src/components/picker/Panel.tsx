import { PickerView, PickerViewColumn, View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import type { PanelProps, ValueType } from '~/types/picker/panel';

const prefixCls = `${PREFIX}-picker-panel`;

const Panel = <T extends ValueType = number>({
  className,
  style,
  indicatorClass,
  indicatorStyle,
  maskClass,
  maskStyle,
  immediateChange = true,
  options,
  value,
  onChange,
  onPickStart,
  onPickEnd,
}: PanelProps<T>) => {
  return (
    <PickerView
      className={classnames(prefixCls, className)}
      style={style}
      indicatorClass={indicatorClass}
      indicatorStyle={indicatorStyle}
      maskClass={maskClass}
      maskStyle={maskStyle}
      immediateChange={immediateChange}
      value={value}
      onChange={(e) => {
        onChange?.(e.detail.value);
      }}
      onPickStart={onPickStart}
      onPickEnd={onPickEnd}
    >
      {options?.map((item, index) => {
        return (
          <PickerViewColumn className={`${prefixCls}-column`} key={index}>
            {item.map((option) => (
              <View className={`${prefixCls}-column-item`} key={option.value}>
                {option.label}
              </View>
            ))}
          </PickerViewColumn>
        );
      })}
    </PickerView>
  );
};
export default Panel;
