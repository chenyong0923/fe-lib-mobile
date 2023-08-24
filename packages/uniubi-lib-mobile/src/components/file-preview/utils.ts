import Taro from '@tarojs/taro';

/**
 * 文件预览
 * @param tempFilePath 文件临时路径
 * @returns 回调函数
 */
export function previewFile(tempFilePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    Taro.openDocument({
      filePath: tempFilePath,
      success() {
        resolve();
      },
      fail(err) {
        console.log('文件预览失败', err);
        reject(err);
      },
    });
  });
}

/**
 * 图片预览
 * @param tempFilePath 图片临时路径
 * @returns 回调函数
 */
export function previewImage(tempFilePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    Taro.previewImage({
      urls: [tempFilePath],
      success() {
        resolve();
      },
      fail(err) {
        console.log('图片预览失败', err);
        reject(err);
      },
    });
  });
}

/**
 * 视频文件预览
 * @param tempFilePath 文件临时路径
 * @returns 回调函数
 */
export function previewVideo(tempFilePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    Taro.openVideoEditor({
      filePath: tempFilePath,
      success() {
        resolve();
      },
      fail(err) {
        console.log('视频预览失败', err);
        reject(err);
      },
    });
  });
}

/**
 * 音频预览
 * @param tempFilePath 文件临时路径
 * @returns 回调函数
 */
export function previewAudio(tempFilePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    Taro.playVoice({
      filePath: tempFilePath,
      success() {
        resolve();
      },
      fail(err) {
        console.log('音频预览失败', err);
        reject(err);
      },
    });
  });
}
