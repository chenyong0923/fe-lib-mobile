import Taro from '@tarojs/taro';

/**
 * 获取 DOM 信息
 * @param {String} flag 类名、ID名称
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
