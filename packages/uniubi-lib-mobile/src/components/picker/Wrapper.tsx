import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useEffect, useMemo, useState } from 'react';

import { PREFIX } from '@/constants';

import Popup from '../popup';
import Header from './Header';

import type { WrapperProps } from '~/types/picker/wrapper';

const prefixCls = `${PREFIX}-picker`;

const Wrapper = ({
  className,
  style,
  children,
  visible,
  title,
  panel,
  onVisibleChange,
  onOk,
  onCancel,
}: WrapperProps) => {
  // 用于内部控制显示隐藏
  const [innerVisible, setInnerVisible] = useState<boolean>(false);

  // 最终显示隐藏状态
  const _visible = useMemo(() => {
    // 如果外部传入了 visible，则使用外部传入的 visible
    if (typeof visible === 'boolean') {
      return visible;
    }
    return innerVisible;
  }, [visible, innerVisible]);

  useEffect(() => {
    onVisibleChange?.(_visible);
  }, [_visible]);

  const handleOk = () => {
    setInnerVisible(false);
    onOk?.();
  };

  const handleCancel = () => {
    setInnerVisible(false);
    onCancel?.();
  };

  return (
    <View
      className={classnames(`${prefixCls}-wrapper`, className)}
      style={style}
    >
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
          <Header title={title} onOk={handleOk} onCancel={handleCancel} />
          {panel}
        </Popup>
      </View>
    </View>
  );
};

export default Wrapper;
