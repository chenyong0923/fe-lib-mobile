import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import StepsContext from './context';
import Item from './Item';

import type { StepsProps } from '~/types/steps';

const prefixCls = `${PREFIX}-steps`;

const Steps = ({
  className,
  style,
  children,
  layout = 'horizontal',
  active = 1,
}: StepsProps) => {
  return (
    <StepsContext.Provider value={{ activeValue: active }}>
      <View
        className={classnames(prefixCls, `${prefixCls}-${layout}`, className)}
        style={style}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          const _index = index + 1;
          return (
            <View className={`${prefixCls}-step`}>
              {_index !== React.Children.count(children) && (
                <View
                  className={classnames(`${prefixCls}-line`, {
                    [`${prefixCls}-line-active`]: _index <= active - 1,
                  })}
                />
              )}
              {React.cloneElement(child, {
                ...(child.props as any),
                index: _index,
              })}
            </View>
          );
        })}
      </View>
    </StepsContext.Provider>
  );
};

Steps.Item = Item;

export default Steps;
