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

/**
 * 是否为无效值
 * @param {any} val 输入值
 * @returns 是否无效
 */
export const isInvalid = (val: any) => val === null || val === undefined;

export const getValueByKeys = (
  keys: string | string[],
  obj?: { [key: string]: any },
) => {
  if (obj) {
    if (typeof keys === 'string') {
      return obj[keys];
    } else {
      const getValue = (o, k, i) => {
        if (i < keys.length - 1) {
          return getValue(o[k], keys[i + 1], ++i);
        } else {
          return o[k];
        }
      };
      return getValue(obj, keys[0], 0);
    }
  }
};
