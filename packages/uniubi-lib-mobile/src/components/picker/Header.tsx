import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import Button from '../button';

import type { HeaderProps } from '~/types/picker/header';

const prefixCls = `${PREFIX}-picker-header`;

const Header = ({ className, style, title, onOk, onCancel }: HeaderProps) => {
  return (
    <View className={classnames(`${prefixCls}`, className)} style={style}>
      <Button
        className={classnames(`${prefixCls}-btn`, `${prefixCls}-btn-cancel`)}
        type="text"
        onClick={onCancel}
      >
        取消
      </Button>
      <View className={`${prefixCls}-title`}>{title}</View>
      <Button
        className={classnames(`${prefixCls}-btn`, `${prefixCls}-btn-ok`)}
        type="link"
        onClick={onOk}
      >
        确定
      </Button>
    </View>
  );
};

export default Header;
