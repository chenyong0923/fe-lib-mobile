import { ITouchEvent } from '@tarojs/components';
import Taro from '@tarojs/taro';

/**
 * 阻止事件穿透
 * @param {ITouchEvent} event touch 事件
 */
export const noop = (event: ITouchEvent) => {
  event.stopPropagation();
  event.preventDefault();
};

// 系统信息
let systemInfo: Taro.getSystemInfoSync.Result;

/**
 * 获取系统信息
 * @returns 系统信息
 */
export function getSystemInfoSync() {
  if (!systemInfo) {
    systemInfo = Taro.getSystemInfoSync();
  }
  return systemInfo;
}

/**
 * rpx 转 px
 * @param {Number} size rpx 尺寸
 * @returns px 尺寸
 */
export const rpxToPx = (size: number) => {
  const { windowWidth } = getSystemInfoSync();
  return `${size * (windowWidth / 750)}px`;
};
