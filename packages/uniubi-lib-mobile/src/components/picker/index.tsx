import { PickerView, PickerViewColumn, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useMemo, useState } from 'react';

import { PREFIX } from '@/constants';

import { PickerProps, ValueType } from '../../../types/picker';
import Button from '../button';
import Popup from '../popup';

const prefixCls = `${PREFIX}-picker`;

const Picker = <T extends ValueType = number>({
  className,
  style,
  children,
  visible,
  title,
  options,
  value,
  indicatorClass,
  indicatorStyle,
  maskClass,
  maskStyle,
  immediateChange = true,
  onOk,
  onCancel,
  onPickStart,
  onPickEnd,
}: PickerProps<T>) => {
  // 用于内部控制显示隐藏
  const [innerVisible, setInnerVisible] = useState<boolean>(false);
  // 选中的索引
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  // 最终显示隐藏状态
  const _visible = useMemo(() => {
    // 如果外部传入了 visible，则使用外部传入的 visible
    if (typeof visible === 'boolean') {
      return visible;
    }
    return innerVisible;
  }, [visible, innerVisible]);

  // 最终选中的值
  const _value = useMemo(() => {
    if (Array.isArray(value)) {
      return value.map((item, index) =>
        options[index]?.findIndex((option) => option.value === item),
      );
    }
    return selectedIndex;
  }, [value, selectedIndex, options]);

  const handleChange = (indexArray: number[]) => {
    setSelectedIndex(indexArray);
  };

  // 确定事件
  const handleOk = () => {
    setInnerVisible(false);
    const v = selectedIndex.map((item, index) => options[index][item].value);
    onOk?.(v);
  };

  // 取消事件
  const handleCancel = () => {
    setInnerVisible(false);
    onCancel?.();
  };

  return (
    <View className={classnames(prefixCls, className)} style={style}>
      <View
        className={`${prefixCls}-content`}
        onClick={() => {
          setInnerVisible(true);
        }}
      >
        {children}
      </View>
      <Popup
        className={`${prefixCls}-popup`}
        visible={_visible}
        position="bottom"
      >
        <View className={`${prefixCls}-popup-header`}>
          <Button
            className={`${prefixCls}-popup-header-btn`}
            type="text"
            onClick={handleCancel}
          >
            取消
          </Button>
          <View className={`${prefixCls}-popup-header-title`}>{title}</View>
          <Button
            className={`${prefixCls}-popup-header-btn`}
            type="link"
            onClick={handleOk}
          >
            确定
          </Button>
        </View>
        <PickerView
          className={`${prefixCls}-popup-body`}
          indicatorClass={indicatorClass}
          indicatorStyle={indicatorStyle}
          maskClass={maskClass}
          maskStyle={maskStyle}
          immediateChange={immediateChange}
          value={_value}
          onChange={(e) => {
            handleChange(e.detail.value);
          }}
          onPickStart={onPickStart}
          onPickEnd={onPickEnd}
        >
          {options?.map((item, index) => {
            return (
              <PickerViewColumn
                className={`${prefixCls}-popup-body-column`}
                key={index}
              >
                {item.map((option) => (
                  <View
                    className={`${prefixCls}-popup-body-column-item`}
                    key={option.value}
                  >
                    {option.label}
                  </View>
                ))}
              </PickerViewColumn>
            );
          })}
        </PickerView>
      </Popup>
    </View>
  );
};

export default Picker;
