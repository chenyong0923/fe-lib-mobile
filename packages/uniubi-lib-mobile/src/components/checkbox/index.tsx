import { View } from '@tarojs/components';
import { CheckOutlined } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React, { useMemo } from 'react';

import { PREFIX } from '@/constants';

import Group from './group';

import type { CheckboxProps } from '~/types/checkbox';

const prefixCls = `${PREFIX}-checkbox`;

const Checkbox = ({
  className,
  style,
  children,
  value,
  onChange,
  desc,
  checked,
  disabled = false,
  onClick,
}: CheckboxProps) => {
  // 内部选中状态
  const [innerChecked, setInnerChecked] = React.useState<boolean>(false);

  // 最终选中状态
  const finalChecked = useMemo(() => {
    // 如果外部传入了 checked，以外部传入的为准
    if (typeof checked === 'boolean') {
      return checked;
    }
    return innerChecked;
  }, [checked, innerChecked]);

  // 渲染多选 icon
  const icon = useMemo(() => {
    return (
      <View className={`${prefixCls}-input`}>
        {finalChecked && <CheckOutlined />}
      </View>
    );
  }, [finalChecked]);

  return (
    <View
      className={classnames(
        prefixCls,
        { [`${prefixCls}-checked`]: finalChecked },
        { [`${prefixCls}-disabled`]: disabled },
        className,
      )}
      style={style}
      onClick={(e) => {
        if (disabled) return;
        setInnerChecked(!innerChecked);
        onClick?.(e);
        onChange?.(value);
      }}
    >
      {icon}
      <View className={`${prefixCls}-content`}>
        <View className={`${prefixCls}-content-label`}>{children}</View>
        <View className={`${prefixCls}-content-desc`}>{desc}</View>
      </View>
    </View>
  );
};

Checkbox.Group = Group;

export default Checkbox;
