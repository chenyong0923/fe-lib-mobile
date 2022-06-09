import { CSSProperties } from 'react';

// 驼峰字符转换成用 `-` 连接的字符串
export const kebabCase = (word: string) =>
  word.replace(new RegExp('[A-Z]', 'g'), (i: any) => `-${i}`)?.toLowerCase();

// styles 对象转换成字符串
export const getStyles = (styles: CSSProperties) =>
  Object.entries(styles)
    .map((item) => `${kebabCase(item[0])}: ${item[1]}`)
    .join(';');
