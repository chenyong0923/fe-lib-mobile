/**
 * 格式化空值
 * @param {any} val 值
 * @returns 字符串值
 */
export const formatValue = (val?: any) => {
  if (val === undefined || val === null) return '';
  return String(val);
};
