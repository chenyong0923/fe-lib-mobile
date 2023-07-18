import classnames from 'classnames';
import React, { useCallback, useMemo, useState } from 'react';

import { PREFIX } from '@/constants';

import { PickerProps, ValueType } from '../../../types/picker';
import Panel from './Panel';
import Wrapper from './Wrapper';

const prefixCls = `${PREFIX}-picker`;

const Picker = <T extends ValueType = number>({
  className,
  style,
  children,
  visible,
  title,
  options,
  defaultValue,
  value,
  indicatorClass,
  indicatorStyle,
  maskClass,
  maskStyle,
  immediateChange = true,
  onChange,
  onOk,
  onCancel,
  onPickStart,
  onPickEnd,
}: PickerProps<T>) => {
  // 获取值对应选项的索引
  const valueToIndex = useCallback(
    (v: T[]) => {
      return v.map((item, index) =>
        options[index]?.findIndex((option) => option.value === item),
      );
    },
    [options],
  );

  // 选中的索引
  const [selectedIndex, setSelectedIndex] = useState<number[]>(
    defaultValue
      ? valueToIndex(defaultValue)
      : Array.from({ length: options.length }, () => 0),
  );

  // 最终选中的值
  const _value = useMemo(() => {
    if (Array.isArray(value)) {
      return valueToIndex(value);
    }
    return selectedIndex;
  }, [value, selectedIndex, valueToIndex]);

  const handleChange = (indexArray: number[]) => {
    setSelectedIndex(indexArray);
    const v = indexArray.map((item, index) => options[index][item].value);
    onChange?.(v);
  };

  // 确定事件
  const handleOk = () => {
    const v = selectedIndex.map((item, index) => options[index][item].value);
    onOk?.(v);
  };

  // 取消事件
  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <Wrapper
      className={classnames(prefixCls, className)}
      style={style}
      visible={visible}
      title={title}
      panel={
        <Panel
          indicatorClass={indicatorClass}
          indicatorStyle={indicatorStyle}
          maskClass={maskClass}
          maskStyle={maskStyle}
          immediateChange={immediateChange}
          options={options}
          value={_value}
          onChange={handleChange}
          onPickStart={onPickStart}
          onPickEnd={onPickEnd}
        />
      }
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Wrapper>
  );
};

export default Picker;
