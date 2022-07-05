/**
 * 修改对象中的属性，并返回新对象
 * @param {Record<string, any>} data 原数据
 * @param {String} key 属性名
 * @param {any} value 值
 * @returns 新对象
 */
export const set = (data: Record<string, any>, key: string, value: any) => {
  const ret = { ...data };
  ret[key] = value;
  return ret;
};
