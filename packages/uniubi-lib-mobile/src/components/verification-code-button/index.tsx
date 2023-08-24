import { Text, View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useMemo, useRef, useState } from 'react';

import { PREFIX } from '@/constants';

import { VerificationCodeButtonProps } from '../../../types/verification-code-button';
import Loading from '../loading';

const prefixCls = `${PREFIX}-verification-code-button`;

const VerificationCodeButton = ({
  className,
  style,
  text = '发送验证码',
  time = 60,
  disabled = false,
  onBeforeCountdown,
}: VerificationCodeButtonProps) => {
  // 计时器
  const timer = useRef<NodeJS.Timer>();

  // 加载中
  const [loading, setLoading] = useState<boolean>(false);
  // 倒计时数字
  const [num, setNum] = useState<number>(0);

  // 倒计时进行中禁用按钮
  const isDisabled = useMemo(() => {
    // 如果外部禁用，优先外部
    if (disabled) return true;
    return num > 0;
  }, [disabled, num]);

  // 开始倒计时
  const startCountdown = () => {
    if (timer.current) return;
    setNum(time);
    const t = setInterval(() => {
      setNum((n) => {
        if (n <= 0) {
          clearTimer();
          return 0;
        } else {
          return n - 1;
        }
      });
    }, 1000);
    timer.current = t;
  };

  // 清除定时器
  const clearTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = undefined;
    }
  };

  const handleClick = async () => {
    if (isDisabled) return;
    setLoading(true);
    try {
      await onBeforeCountdown?.();
      startCountdown();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      className={classnames(
        prefixCls,
        { [`${prefixCls}-disabled`]: isDisabled },
        className,
      )}
      style={style}
      onClick={handleClick}
    >
      <Text className={`${prefixCls}-text`}>{text}</Text>
      {num > 0 && <Text className={`${prefixCls}-countdown`}>({num}s)</Text>}
      {loading && <Loading className={`${prefixCls}-loading`} type="primary" />}
    </View>
  );
};

export default VerificationCodeButton;
