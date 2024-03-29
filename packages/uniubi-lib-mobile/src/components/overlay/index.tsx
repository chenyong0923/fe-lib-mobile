import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

import { PREFIX } from '@/constants';
import { noop } from '@/utils/common';
import useTransition from '@/utils/useTransition';
import { OverlayProps } from '~/types/overlay';

const prefix = `${PREFIX}-overlay`;

const Overlay: React.FC<OverlayProps> = ({
  className,
  style,
  visible = false,
  onClick,
  onClosed,
  children,
  ...rest
}) => {
  // 内部显示状态，决定组件是否存在，当 show 为 false 时组件销毁
  const [show, setShow] = useState(false);

  const { classes, transitionStyles } = useTransition({
    visible,
    onAfterLeave: () => {
      setShow(false);
      onClosed?.();
    },
  });

  useEffect(() => {
    if (visible) {
      setShow(true);
    }
  }, [visible]);

  return show ? (
    <View
      className={classnames(prefix, classes, className)}
      style={{
        ...transitionStyles,
        ...style,
      }}
      onTouchMove={noop} // 阻止事件穿透
      onClick={onClick}
      {...rest}
      catchMove
    >
      {children}
    </View>
  ) : null;
};

export default Overlay;
