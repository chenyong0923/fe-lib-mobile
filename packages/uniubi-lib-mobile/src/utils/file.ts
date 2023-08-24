import Taro from '@tarojs/taro';

/**
 * 获取文件后缀名
 * @public
 * @param filename - 文件名
 * @returns 后缀名
 * @example
 * ```ts
 * getSuffix('demo.png') => '.png'
 * ```
 */
export const getSuffix = (filename: string) => {
  const pos = filename.lastIndexOf('.');
  let suffix = '';
  if (pos !== -1) {
    suffix = filename.substring(pos);
  }
  return suffix;
};

/**
 * 从 url 中提取文件名
 * @param url url 地址
 * @param separator 文件名和时间戳之间的分割符
 * @returns 文件名
 */
export const extname = (url: string, separator?: string) => {
  // 移除 url 后面的参数，如 ?x-oss-process=img/q/80
  const [urlWithoutParams] = url.split('?');
  const temp = urlWithoutParams.split('/');
  const filenameWithTimestamp = temp[temp.length - 1];
  // 如果存在分隔符，则去除文件名后的时间戳
  if (separator) {
    const suffix = getSuffix(filenameWithTimestamp);
    // 如果文件名中存在多处分隔符，则只移除最后一个分隔符后的时间戳
    const filename = filenameWithTimestamp
      .split(separator)
      .slice(0, -1)
      .join(separator);
    return `${filename}${suffix}`;
  }
  return filenameWithTimestamp;
};

/**
 * 下载文件
 * @param url 下载地址
 * @returns 文件临时路径
 */
export const download = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    Taro.downloadFile({
      url, // 文件的远程地址
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.tempFilePath);
        } else {
          console.log('文件下载失败', res.statusCode);
          reject();
        }
      },
      fail(err) {
        console.log('文件下载失败', err);
        reject(err);
      },
    });
  });
};
