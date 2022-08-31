import { Input as TaroInput, View } from '@tarojs/components';
import { EyeoffOutlined, EyeOutlined, FailFilled } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

import { PREFIX } from '@/constants';
import { isNil } from '@/utils/common';
import { InputProps } from '~/types/input';

import { formatValue } from './utils';

import type {
  CommonEventFunction,
  InputProps as TaroInputProps,
} from '@tarojs/components';

const prefixCls = `${PREFIX}-input`;

const Input = ({
  className,
  style,
  prefix,
  suffix,
  allowClear = true,
  password = false,
  border = false,
  value,
  onChange,
  ...rest
}: InputProps) => {
  const [innerValue, setInnerValue] = useState<string>('');
  // 输入类型为密码时，控制是否明文显示密码
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!isNil(value)) {
      setInnerValue(formatValue(value));
    }
  }, [value]);

  // 输入事件
  const handleInput: CommonEventFunction<TaroInputProps.inputEventDetail> = (
    e,
  ) => {
    onChange?.(e.detail.value);
    if (isNil(value)) {
      setInnerValue(e.detail.value);
    }
  };

  // 清除输入框
  const handleClear = () => {
    if (isNil(value)) {
      setInnerValue('');
    }
    onChange?.('');
  };

  return (
    <View
      className={classnames(
        prefixCls,
        { [`${prefixCls}-border`]: border },
        className,
      )}
      style={style}
    >
      {/* 前缀 */}
      {prefix ? <View className={`${prefixCls}-prefix`}>{prefix}</View> : null}
      {/* 输入框 */}
      <TaroInput
        className={`${prefixCls}-inner`}
        placeholderClass={`${prefixCls}-inner-placeholder`}
        value={innerValue}
        onInput={handleInput}
        password={password && !visible}
        {...rest}
      />
      {/* 清除按钮 */}
      {allowClear && innerValue ? (
        <View className={`${prefixCls}-clear`} onClick={handleClear}>
          <FailFilled />
        </View>
      ) : null}
      {/* 密码是否可见按钮 */}
      {password ? (
        <View className={`${prefixCls}-visible`}>
          {visible ? (
            <EyeOutlined
              onClick={() => {
                setVisible(false);
              }}
            />
          ) : (
            <EyeoffOutlined
              onClick={() => {
                setVisible(true);
              }}
            />
          )}
        </View>
      ) : null}
      {/* 后缀 */}
      {suffix ? <View className={`${prefixCls}-suffix`}>{suffix}</View> : null}
    </View>
  );
};

export default Input;
