/**
 * hex 格式转 rgb 格式
 * @public
 * @param hex - hex 色值
 * @returns  rgb 颜色
 * @example
 * ```ts
 * hexToRgb('#000000') => { r: 0, g: 0: b: 0 }
 * ```
 */
export const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const color = hex.replace(shorthandRegex, (_, r, g, b) => {
    return `${r}${r}${g}${g}${b}${b}`;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
