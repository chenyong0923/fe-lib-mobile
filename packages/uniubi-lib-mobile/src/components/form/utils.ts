import type { NamePathType } from '~/types/form/common';

/**
 * 根据字段路径返回格式化后字段名
 * @param  name 字段路径
 * @returns 字段名
 */
export const getName = (namePath: NamePathType) => {
  if (Array.isArray(namePath)) return namePath.join('.');
  return namePath;
};
