import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import { DescriptionsProps } from '../../../types/descriptions';
import Item from './Item';

const prefixCls = `${PREFIX}-descriptions`;

const Descriptions = ({
  className,
  style,
  children,
  layout = 'horizontal',
  colon = true,
  labelStyle,
}: DescriptionsProps) => {
  return (
    <View
      className={classnames(
        prefixCls,
        `${prefixCls}-${layout}`,
        { [`${prefixCls}-with-colon`]: colon && layout === 'horizontal' },
        className,
      )}
      style={style}
    >
      {React.Children.map(children, (child) => {
        // 判断传入的组件名是否为 Descriptions.Item，如果是则渲染，否则不渲染
        if (React.isValidElement(child) && child.type === Descriptions.Item) {
          return React.cloneElement(child, {
            ...(child.props as any),
            labelStyle: {
              ...labelStyle,
              ...child.props.labelStyle,
            },
          });
        }
        return null;
      })}
    </View>
  );
};

Descriptions.Item = Item;

export default Descriptions;
