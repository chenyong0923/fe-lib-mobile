import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import RadioContext from './context';

import type { RadioGroupProps } from '~/types/radio/group';
import type { FC } from 'react';

const prefixCls = `${PREFIX}-radio-group`;

const RadioGroup: FC<RadioGroupProps> = ({
  className,
  style,
  children,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <RadioContext.Provider
      value={{ activeValue: value, changeActiveValue: onChange }}
    >
      <View className={classnames(`${prefixCls}`, className)} style={style}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          return React.cloneElement(child, {
            ...(child.props as any),
            disabled,
          });
        })}
      </View>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
