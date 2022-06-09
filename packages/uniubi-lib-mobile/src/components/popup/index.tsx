import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

import { PREFIX } from '@/constants';
import useTransition from '@/utils/useTransition';
import { UPopupProps } from '~/types/popup';

import Overlay from '../overlay';

const prefix = `${PREFIX}-popup`;

const Popup: React.FC<UPopupProps> = ({
  className,
  style,
  children,
  visible = false,
  // closeOnClickOverlay,
  position = 'center',
  onClose,
  onBeforeEnter,
  onBeforeLeave,
  onAfterEnter,
  onAfterLeave,
  onEnter,
  onLeave,
}) => {
  // 组件显示状态
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    }
  }, [visible]);

  // 关闭组件
  const handleClose = () => {
    onClose?.();
  };

  const { classes, transitionStyles } = useTransition({
    visible,
    name: position === 'center' ? 'fade' : `slide-${position}`,
    onBeforeEnter,
    onBeforeLeave,
    onAfterEnter,
    onAfterLeave,
    onEnter,
    onLeave,
  });

  return show ? (
    <Overlay
      visible={visible}
      onClick={handleClose}
      onClosed={() => {
        setShow(false);
      }}
    >
      <View
        className={classnames(
          prefix,
          `${prefix}-${position}`,
          classes,
          className,
        )}
        style={{
          ...transitionStyles,
          ...style,
        }}
      >
        {children}
      </View>
    </Overlay>
  ) : null;
};

export default Popup;
