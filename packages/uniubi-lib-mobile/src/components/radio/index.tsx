import { View } from '@tarojs/components';
import { CheckOutlined } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React, { useContext, useMemo } from 'react';

import { PREFIX } from '@/constants';

import RadioContext from './context';
import Group from './group';

import type { RadioProps } from '~/types/radio';

const prefixCls = `${PREFIX}-radio`;

const Radio = ({
  className,
  style,
  children,
  value,
  onChange,
  checked,
  disabled,
  iconPlacement = 'left',
  iconMode = 'filled',
  desc,
  onClick,
}: RadioProps) => {
  const { activeValue, changeActiveValue } = useContext(RadioContext);

  // 组件最终选中状态
  const finalChecked = useMemo(() => {
    // 如果存在 checked，以 checked 为准
    if (typeof checked === 'boolean') {
      return checked;
    }
    // 否则比较当前项与选中项是否相同
    return value !== undefined && value === activeValue;
  }, [checked, value, activeValue]);

  const renderIcon = () => {
    return (
      <View
        className={classnames(
          `${prefixCls}-input`,
          `${prefixCls}-input-${iconMode}`,
        )}
      >
        <CheckOutlined className={`${prefixCls}-input-icon`} />
      </View>
    );
  };

  // 值变更事件
  const handleChange = (v: any) => {
    // 单独使用
    onChange?.(v);
    if (activeValue !== value) {
      // group 时
      changeActiveValue?.(v);
    }
  };

  return (
    <View
      className={classnames(
        prefixCls,
        `${prefixCls}-${iconPlacement}`,
        { [`${prefixCls}-checked`]: finalChecked },
        { [`${prefixCls}-disabled`]: disabled },
        className,
      )}
      style={style}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
        handleChange(value);
      }}
    >
      <View className={`${prefixCls}-prefix`}>
        {iconPlacement === 'left' && renderIcon()}
      </View>
      <View className={`${prefixCls}-body`}>
        <View className={`${prefixCls}-body-content`}>
          <View className={`${prefixCls}-body-content-label`}>{children}</View>
          {desc && (
            <View className={`${prefixCls}-body-content-desc`}>{desc}</View>
          )}
        </View>
        {iconPlacement === 'right' && renderIcon()}
      </View>
    </View>
  );
};

Radio.Group = Group;

export default Radio;
