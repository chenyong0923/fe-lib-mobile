import { Text, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useMemo, useState } from 'react';

import { PREFIX } from '@/constants';

import { SwitchProps } from '../../../types/switch';

const prefixCls = `${PREFIX}-switch`;

const Switch = ({
  className,
  style,
  defaultChecked,
  checked,
  disabled = false,
  checkedLabel,
  uncheckedLabel,
  onChange,
}: SwitchProps) => {
  // 内部选中状态
  const [innerChecked, setInnerChecked] = useState(defaultChecked);

  // 实际选中状态
  const _checked = useMemo(() => {
    if (typeof checked === 'boolean') {
      return checked;
    }
    return innerChecked;
  }, [checked, innerChecked]);

  // 值改变回调
  const handleChange = (val: boolean) => {
    if (disabled) return;
    setInnerChecked(!_checked);
    onChange?.(val);
  };

  return (
    <View
      className={classnames(
        prefixCls,
        { [`${prefixCls}-disabled`]: disabled },
        className,
      )}
      style={style}
    >
      {uncheckedLabel ? (
        <Text
          className={classnames(
            `${prefixCls}-label`,
            `${prefixCls}-label-unchecked`,
          )}
        >
          {uncheckedLabel}
        </Text>
      ) : null}
      <View
        className={classnames(
          `${prefixCls}-input`,
          `${prefixCls}-input-${_checked ? 'on' : 'off'}`,
        )}
        onClick={() => {
          handleChange(!_checked);
        }}
      >
        <View className={`${prefixCls}-input-slider`} />
      </View>
      {checkedLabel ? (
        <Text
          className={classnames(
            `${prefixCls}-label`,
            `${prefixCls}-label-checked`,
          )}
        >
          {checkedLabel}
        </Text>
      ) : null}
    </View>
  );
};

export default Switch;
