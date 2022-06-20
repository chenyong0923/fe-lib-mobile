import { ITouchEvent } from '@tarojs/components';
import Taro from '@tarojs/taro';

// 阻止事件穿透
export const noop = (event: ITouchEvent) => {
  event.stopPropagation();
  event.preventDefault();
};

export const rpxToPx = (size: number) => {
  const { windowWidth } = Taro.getSystemInfoSync();
  return `${size * (windowWidth / 750)}px`;
};
