import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import type { CheckboxGroupProps } from '~/types/checkbox/group';
import type { FC } from 'react';

const prefixCls = `${PREFIX}-checkbox-group`;

const CheckboxGroup: FC<CheckboxGroupProps> = ({
  className,
  style,
  children,
  value = [],
  onChange,
  disabled,
}) => {
  return (
    <View className={classnames(`${prefixCls}`, className)} style={style}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return null;
        }
        return React.cloneElement(child, {
          ...(child.props as any),
          disabled:
            typeof disabled === 'boolean' ? disabled : child.props.disabled,
          checked: value?.includes(child.props.value),
          onChange: (val: any) => {
            const ret = value?.includes(val)
              ? value.filter((v: any) => v !== val)
              : [...value, val];
            onChange?.(ret);
          },
        });
      })}
    </View>
  );
};

export default CheckboxGroup;
