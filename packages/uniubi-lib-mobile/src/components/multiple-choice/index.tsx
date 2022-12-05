import { View } from '@tarojs/components';
import { CheckOutlined } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React from 'react';

import { DEFAULT_SIGNS, PREFIX } from '@/constants';

import Group from './group';

import type { MultipleChoiceProps } from '~/types/multiple-choice';
import type { ValueType } from '~/types/multiple-choice/common';

const prefix = `${PREFIX}-multiple-choice`;

const MultipleChoice = ({
  className,
  style,
  question,
  options,
  signs = DEFAULT_SIGNS,
  multiple = false,
  modeTag = true,
  value,
  onChange,
}: MultipleChoiceProps) => {
  const handleChange = (val: ValueType) => {
    // 多选
    if (multiple) {
      const _value = value ? [...(value as ValueType[])] : [];
      if (_value.includes(val)) {
        // 如果选项已存在，则移除
        onChange?.(_value.filter((v) => v !== val));
      } else {
        // 如果选项不存在，则加入
        onChange?.([..._value, val]);
      }
    } else {
      onChange?.(val);
    }
  };

  // 渲染选择类型标签
  const renderTag = () => {
    if (modeTag === false || modeTag === undefined) return null;
    if (typeof modeTag === 'boolean') {
      return `【${multiple ? '多选' : '单选'}】`;
    }
    return modeTag;
  };

  return (
    <View className={classnames(prefix, className)} style={style}>
      <View className={`${prefix}-question`}>
        {question}
        {renderTag()}
      </View>
      <View className={`${prefix}-options`}>
        {options?.map((option, index) => (
          <View
            key={option.value}
            className={classnames(`${prefix}-option`, {
              [`${prefix}-option-selected`]: multiple
                ? (value as ValueType[])?.includes(option.value)
                : value === option.value,
            })}
            onClick={() => {
              handleChange(option.value);
            }}
          >
            <View className={`${prefix}-option-label`}>
              <View className={`${prefix}-option-label-num`}>
                {`${signs[index]}. `}
              </View>
              <View className={`${prefix}-option-label-text`}>
                {option.label}
              </View>
            </View>
            <CheckOutlined className={`${prefix}-option-icon`} />
          </View>
        ))}
      </View>
    </View>
  );
};

MultipleChoice.Group = Group;

export default MultipleChoice;
