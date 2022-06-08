import classnames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';

import { PREFIX } from '@/constants';
import { UOverlayProps } from '~/types/overlay';

import Transition from '../transition';

const prefix = `${PREFIX}-overlay`;

const Overlay: React.FC<UOverlayProps> = ({
  className,
  style,
  visible = false,
  onClick,
  children,
  ...rest
}) => {
  // 内部显示状态，决定组件是否存在，当 show 为 false 时组件销毁
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible) {
      setShow(true);
    }
    return () => {};
  }, [visible]);

  // 阻止事件穿透
  const _noop = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
  }, []);

  return show ? (
    <Transition
      className={classnames(prefix, className)}
      style={style}
      onTouchMove={_noop}
      visible={visible} // Transition 组件的显示，决定动画的起止
      onClick={onClick}
      onAfterLeave={() => {
        setShow(false);
      }}
      {...rest}
    >
      {children}
    </Transition>
  ) : null;
};

export default Overlay;
