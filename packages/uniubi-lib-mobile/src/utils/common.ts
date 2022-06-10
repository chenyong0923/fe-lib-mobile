import { ITouchEvent } from '@tarojs/components';

// 阻止事件穿透
export const noop = (event: ITouchEvent) => {
  event.stopPropagation();
  event.preventDefault();
};
