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
 * @returns px 值
 */
export const rpxToPxNumber = (size: number) => {
  if (!size) return 0;
  const { windowWidth } = getSystemInfoSync();
  return size * (windowWidth / 750);
};

/**
 * rpx 转 px
 * @param {Number} size rpx 尺寸
 * @returns px 尺寸
 */
export const rpxToPx = (size: number) => {
  return `${rpxToPxNumber(size)}px`;
};

/**
 * 是否为无效值
 * @param {any} val 输入值
 * @returns 是否无效
 */
export const isInvalid = (val: any) => val === null || val === undefined;

/**
 * 获取对象指定keys的值
 * @param keys 键
 * @param obj 对象
 */
export const deepGetValue = (
  keys: string | string[],
  obj?: { [key: string]: any },
) => {
  if (obj) {
    if (typeof keys === 'string') {
      return obj[keys];
    } else {
      return keys.reduce((pre, next) => {
        return pre?.[next];
      }, obj);
    }
  }
};

export const uuid = (len = 16) => {
  const chars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const id: string[] = [];

  if (len) {
    for (let i = 0; i < len; i++) {
      id[i] = chars[0 | (Math.random() * chars.length)];
    }
  } else {
    let r;
    id[8] = '-';
    id[13] = '-';
    id[18] = '-';
    id[23] = '-';
    id[14] = '4';

    for (let i = 0; i < 36; i++) {
      if (!id[i]) {
        r = 0 | (Math.random() * 16);
        id[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return id.join('');
};
