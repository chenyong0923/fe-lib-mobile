import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';

import { PREFIX } from '@/constants';

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
  enter: `${PREFIX}-${name}-enter ${PREFIX}-${name}-enter-active enter-class enter-active-class`, // 开始执行进入动画时的类名
  'enter-to': `${PREFIX}-${name}-enter-to ${PREFIX}-${name}-enter-active enter-to-class enter-active-class`, // 进入动画执行完成时的类名
  leave: `${PREFIX}-${name}-leave ${PREFIX}-${name}-leave-active leave-class leave-active-class`, // 开始执行离开动画时的类名
  'leave-to': `${PREFIX}-${name}-leave-to ${PREFIX}-${name}-leave-active leave-to-class leave-active-class`, // 离开动画执行完成时的类名
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

  // 动画实例
  const animationRef = useRef<any>();
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
    animationRef.current = requestAnimationFrame(() => {
      if (status.current !== 'enter') {
        return;
      }
      onEnter?.();
      transitionEnded.current = false;
      setClasses(classNames.enter);
      animationRef.current = requestAnimationFrame(() => {
        setDisplay(true);
      });
    });
  }, [onBeforeEnter, onEnter, classNames]);

  // 开始执行退出动画
  const handleLeave = useCallback(() => {
    if (!display) {
      return;
    }
    status.current = 'leave';
    onBeforeLeave?.();
    animationRef.current = requestAnimationFrame(() => {
      if (status.current !== 'leave') {
        return;
      }
      onLeave?.();
      transitionEnded.current = false;
      setClasses(classNames.leave);
    });
  }, [display, onBeforeLeave, onLeave, classNames]);

  useEffect(() => {
    if (classes === classNames.enter && display) {
      if (status.current !== 'enter') {
        return;
      }
      requestAnimationFrame(() => {
        setTimeout(() => onTransitionEnd(), duration);
        setClasses(classNames['enter-to']);
      });
    }

    if (classes === classNames.leave && display) {
      if (status.current !== 'leave') {
        return;
      }
      requestAnimationFrame(() => {
        setTimeout(() => onTransitionEnd(), duration);
        setClasses(classNames['leave-to']);
      });
    }
  }, [classes, display, classNames, duration, onTransitionEnd]);

  useEffect(() => {
    if (visible) {
      handleEnter();
    }
    if (!visible) {
      handleLeave();
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
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
