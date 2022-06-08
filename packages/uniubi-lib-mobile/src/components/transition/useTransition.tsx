import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { isObj } from '@/utils/validator';
import { UTransitionProps } from '~/types/transition';

const getClassNames = (name: string) => ({
  enter: `ulm-${name}-enter ulm-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `ulm-${name}-enter-to ulm-${name}-enter-active enter-to-class enter-active-class`,
  leave: `ulm-${name}-leave ulm-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `ulm-${name}-leave-to ulm-${name}-leave-active leave-to-class leave-active-class`,
});

const REGEXP = new RegExp('{|}|"', 'g');

function keys(obj: any) {
  return JSON.stringify(obj)
    .replace(REGEXP, '')
    .split(',')
    .map((item) => item.split(':')[0]);
}

function kebabCase(word: any) {
  const newWord = word
    .replace(new RegExp('[A-Z]', 'g'), (i: any) => {
      return `-${i}`;
    })
    ?.toLowerCase();

  return newWord;
}

export function transitionStyle(styles: any): string {
  if (Array.isArray(styles)) {
    return styles
      .filter((item: any) => item != null && item !== '')
      .map((item: any) => transitionStyle(item))
      .join(';');
  }

  if (toString.call(styles) === '[object Object]') {
    return keys(styles)
      .filter((key: any) => styles[key] != null && styles[key] !== '')
      .map((key: any) => [kebabCase(key), [styles[key]]].join(':'))
      .join(';');
  }

  return styles;
}

export function rootStyle(data: any) {
  return transitionStyle([
    {
      '-webkit-transition-duration': `${data.currentDuration}ms`,
      'transition-duration': `${data.currentDuration}ms`,
    },
    data.display ? null : 'display: none',
    data.style,
  ]);
}

export default function useTransition({
  visible = false,
  duration = 300,
  name = 'fade',
  onBeforeEnter,
  onBeforeLeave,
  onAfterEnter,
  onAfterLeave,
  onEnter,
  onLeave,
  enterClass,
  enterActiveClass,
  enterToClass,
  leaveClass,
  leaveActiveClass,
  leaveToClass,
}: UTransitionProps) {
  const transitionEnded = useRef(false);
  const status = useRef('');
  const [display, setDisplay] = useState(false);
  const [inited, setInited] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [classes, setClasses] = useState('');

  const classNames = useMemo(() => {
    const names = getClassNames(name);
    if (!name) {
      names.enter += ` ${enterClass ?? ''}`;
      names['enter-to'] += `${enterToClass ?? ''} ${enterActiveClass ?? ''} `;
      names.leave += `  ${leaveClass ?? ''}`;
      names['leave-to'] += ` ${leaveToClass ?? ''} ${leaveActiveClass ?? ''}`;
    }
    return names;
  }, [
    enterActiveClass,
    enterClass,
    enterToClass,
    leaveActiveClass,
    leaveClass,
    leaveToClass,
    name,
  ]);

  const onTransitionEnd = useCallback(() => {
    if (transitionEnded.current) {
      return;
    }
    transitionEnded.current = true;

    if (status.current === 'enter') {
      onAfterEnter?.();
    } else {
      setDisplay(false);
      onAfterLeave?.();
    }
  }, [display, onAfterEnter, onAfterLeave, visible]);

  const _enter = useCallback(() => {
    const _currentDuration = isObj(duration)
      ? (duration as any).enter
      : duration;
    status.current = 'enter';
    onBeforeEnter?.();
    requestAnimationFrame(() => {
      if (status.current !== 'enter') {
        return;
      }
      onEnter?.();
      setInited(true);
      setClasses(classNames.enter);
      setDisplay(true);
      setCurrentDuration(_currentDuration);
      requestAnimationFrame(() => {
        if (status.current !== 'enter') {
          return;
        }
        transitionEnded.current = false;
        setTimeout(() => onTransitionEnd(), _currentDuration);
        setClasses(classNames['enter-to']);
      });
    });
  }, [duration, onBeforeEnter, onEnter, classNames, onTransitionEnd]);

  const _leave = useCallback(() => {
    if (!display) {
      return;
    }
    const _currentDuration = isObj(duration)
      ? (duration as any).leave
      : duration;
    status.current = 'leave';
    onBeforeLeave?.();
    requestAnimationFrame(() => {
      if (status.current !== 'leave') {
        return;
      }
      onLeave?.();
      setClasses(classNames.leave);
      setCurrentDuration(_currentDuration);

      requestAnimationFrame(() => {
        if (status.current !== 'leave') {
          return;
        }
        transitionEnded.current = false;
        setTimeout(() => onTransitionEnd(), _currentDuration);
        setClasses(classNames['leave-to']);
      });
    });
  }, [classNames, display, duration, onBeforeLeave, onLeave, onTransitionEnd]);

  useEffect(() => {
    if (visible && (!classes || !classes.includes(classNames['enter-to']))) {
      _enter();
    }
    if (!visible) {
      _leave();
    }
  }, [visible]);

  return {
    display,
    inited,
    currentDuration,
    classes,
    onTransitionEnd,
  };
}
