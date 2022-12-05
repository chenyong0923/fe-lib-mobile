import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import type { ValueType } from '~/types/multiple-choice/common';
import type { MultipleChoiceGroupProps } from '~/types/multiple-choice/group';

const prefix = `${PREFIX}-multiple-choice-group`;

const MultipleChoiceGroup: React.FC<MultipleChoiceGroupProps> = ({
  className,
  style,
  children,
  value = [],
  onChange,
  multiple = false,
  modeTag = true,
}) => {
  const handleChange = (val: ValueType | ValueType[], index: number) => {
    // 单选时，如果点选已选中选项，不执行 onChange 事件
    if (
      val !== undefined &&
      value[index] !== undefined &&
      val === value[index]
    ) {
      return;
    }
    // 把数组中空元素补满
    const newValue = Array.from({ length: React.Children.count(children) }).map(
      (_, i) => value[i] ?? undefined,
    );
    newValue[index] = val;
    onChange?.(newValue);
  };

  // 给题目加序号
  const formatQuestion = (question: string, index: number) => {
    return `${index}、${question}`;
  };

  return (
    <View className={classnames(prefix, className)} style={style}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        const {
          multiple: childMultiple,
          modeTag: childModeTag,
          question,
          ...rest
        } = child.props as any;
        // 优先使用子组件传的属性
        return React.cloneElement(child, {
          ...rest,
          question: formatQuestion(question, index + 1),
          multiple: childMultiple ?? multiple,
          modeTag: childModeTag ?? modeTag,
          value: value[index],
          onChange: (val) => {
            handleChange(val, index);
          },
        });
      })}
    </View>
  );
};

export default MultipleChoiceGroup;
