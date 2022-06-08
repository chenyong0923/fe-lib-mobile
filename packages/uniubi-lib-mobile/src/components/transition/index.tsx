import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { UTransitionProps } from '~/types/transition';

import useTransition, { rootStyle, transitionStyle } from './useTransition';

const prefix = `${PREFIX}-transition`;

const Transition = ({
  onBeforeEnter,
  onBeforeLeave,
  onAfterEnter,
  onAfterLeave,
  onEnter,
  onLeave,
  duration,
  name,
  visible,
  children,
  style,
  className,
  enterClass,
  enterActiveClass,
  enterToClass,
  leaveClass,
  leaveActiveClass,
  leaveToClass,
  ...rest
}: UTransitionProps) => {
  const { currentDuration, classes, display } = useTransition({
    visible,
    duration,
    name,
    enterClass,
    enterActiveClass,
    enterToClass,
    leaveClass,
    leaveActiveClass,
    leaveToClass,
    onBeforeEnter,
    onBeforeLeave,
    onAfterEnter,
    onAfterLeave,
    onEnter,
    onLeave,
  });

  return (
    <View
      className={classnames(prefix, classes, className)}
      style={transitionStyle([
        rootStyle({
          currentDuration,
          display,
        }),
        style,
      ])}
      {...rest}
      catchMove
    >
      {children}
    </View>
  );
};

export default Transition;
