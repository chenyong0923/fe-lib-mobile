import { ITouchEvent, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

import { PREFIX } from '@/constants';
import { noop } from '@/utils/common';
import useTransition from '@/utils/useTransition';
import { PopupProps } from '~/types/popup';

import Overlay from '../overlay';

const prefix = `${PREFIX}-popup`;

const Popup: React.FC<PopupProps> = ({
  className,
  style,
  children,
  visible = false,
  closeOnClickOverlay = true,
  onClose,
  position = 'center',
  overlay = true,
  onClickOverlay,
}) => {
  // 组件显示状态
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    }
  }, [visible]);

  // 点击 Popup
  const handleClick = (e: ITouchEvent) => {
    noop(e);
  };

  // 点击 Overlay 遮照
  const handleOverlayClick = (e: ITouchEvent) => {
    onClickOverlay?.(e);
    if (closeOnClickOverlay) {
      onClose?.();
    }
  };

  const { classes, transitionStyles } = useTransition({
    visible,
    name: position === 'center' ? 'fade' : `slide-${position}`,
    onAfterLeave: () => {
      setShow(false);
    },
  });

  // 不带遮照的 popup 组件
  const renderPopup = (
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
      onClick={handleClick}
    >
      {children}
    </View>
  );

  // 带遮照的 popup 组件
  const renderPopupWithOverlay = (
    <Overlay visible={visible} onClick={handleOverlayClick}>
      {renderPopup}
    </Overlay>
  );

  if (!show) return null;
  return overlay ? renderPopupWithOverlay : renderPopup;
};

export default Popup;
