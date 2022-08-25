import Taro from '@tarojs/taro';

/**
 * 获取 DOM 信息
 * @param {String} flag 类名、ID名称等
 * @return DOM 宽高、上下左右坐标值，单位px
 */
export const queryDom = async (
  flag: string,
): Promise<Taro.NodesRef.BoundingClientRectCallbackResult> => {
  const query = Taro.createSelectorQuery();
  return new Promise((resolve, reject) => {
    try {
      // 必须加一个延时，否则获取不到
      setTimeout(() => {
        query
          .select(flag)
          .boundingClientRect((res) => {
            resolve(res);
          })
          .exec();
      }, 0);
    } catch (err) {
      reject();
    }
  });
};

/**
 * 获取 DOM 滚动信息
 * @param {String} flag 类名、ID名称等
 * @return DOM 滚动值，单位px
 */
export const queryDomScroll = async (
  flag: string,
): Promise<Taro.NodesRef.ScrollOffsetCallbackResult> => {
  const query = Taro.createSelectorQuery();
  return new Promise((resolve, reject) => {
    try {
      // 必须加一个延时，否则获取不到
      setTimeout(() => {
        query
          .select(flag)
          .scrollOffset((res) => {
            resolve(res);
          })
          .exec();
      }, 0);
    } catch (err) {
      reject();
    }
  });
};
