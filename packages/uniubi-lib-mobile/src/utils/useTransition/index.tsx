import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';

import * as stylesUtils from './styles';

export { stylesUtils };

interface TransitionProps {
  visible?: boolean;
  name?: string;
  duration?: number;
  onBeforeEnter?: () => void;
  onEnter?: () => void;
  onAfterEnter?: () => void;
  onBeforeLeave?: () => void;
  onLeave?: () => void;
  onAfterLeave?: () => void;
}

const getClassNames = (name: string) => ({
  enter: `ulm-${name}-enter ulm-${name}-enter-active enter-class enter-active-class`, // 开始执行进入动画时的类名
  'enter-to': `ulm-${name}-enter-to ulm-${name}-enter-active enter-to-class enter-active-class`, // 进入动画执行完成时的类名
  leave: `ulm-${name}-leave ulm-${name}-leave-active leave-class leave-active-class`, // 开始执行离开动画时的类名
  'leave-to': `ulm-${name}-leave-to ulm-${name}-leave-active leave-to-class leave-active-class`, // 离开动画执行完成时的类名
});

const useTransition = ({
  visible = false,
  name = 'fade',
  duration = 300,
  onBeforeEnter,
  onEnter,
  onAfterEnter,
  onBeforeLeave,
  onLeave,
  onAfterLeave,
}: TransitionProps) => {
  const [classes, setClasses] = useState<string>('');
  // display 显示状态
  const [display, setDisplay] = useState<boolean>(false);

  // 当前过渡状态
  const status = useRef<'enter' | 'leave'>();
  // 过渡动画是否已经结束
  const transitionEnded = useRef<boolean>(true);
  // 当前类型下各过渡状态的类名
  const classNames = getClassNames(name);

  // 过渡结束时执行
  const onTransitionEnd = useCallback(() => {
    if (transitionEnded.current) {
      return;
    }
    transitionEnded.current = true;
    if (status.current === 'enter') {
      onAfterEnter?.();
    } else if (status.current === 'leave') {
      setDisplay(false);
      onAfterLeave?.();
    }
  }, [onAfterEnter, onAfterLeave]);

  // 开始执行进入动画
  const handleEnter = useCallback(() => {
    status.current = 'enter';
    onBeforeEnter?.();
    requestAnimationFrame(() => {
      if (status.current !== 'enter') {
        return;
      }
      onEnter?.();
      transitionEnded.current = false;
      setDisplay(true);
      setClasses(classNames.enter);
      requestAnimationFrame(() => {
        if (status.current !== 'enter') {
          return;
        }
        setTimeout(() => onTransitionEnd(), duration);
        setClasses(classNames['enter-to']);
      });
    });
  }, [onBeforeEnter, onEnter, classNames, onTransitionEnd, duration]);

  // 开始执行退出动画
  const handleLeave = useCallback(() => {
    if (!display) {
      return;
    }
    status.current = 'leave';
    onBeforeLeave?.();
    requestAnimationFrame(() => {
      if (status.current !== 'leave') {
        return;
      }
      onLeave?.();
      transitionEnded.current = false;
      setClasses(classNames.leave);
      requestAnimationFrame(() => {
        if (status.current !== 'leave') {
          return;
        }
        setTimeout(() => onTransitionEnd(), duration);
        setClasses(classNames['leave-to']);
      });
    });
  }, [display, onBeforeLeave, onLeave, classNames, onTransitionEnd, duration]);

  useEffect(() => {
    if (visible) {
      handleEnter();
    }
    if (!visible) {
      handleLeave();
    }
  }, [visible]);

  const formatStyles = () => {
    const styles: CSSProperties = {
      transitionDuration: `${duration}ms`,
    };
    if (!display) {
      styles.display = 'none';
    }
    return styles;
  };

  return {
    classes,
    transitionStyles: formatStyles(),
  };
};

export default useTransition;
