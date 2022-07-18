import Taro from '@tarojs/taro';

declare class Toast {
  static info: (
    msg: string,
    option?: Taro.showToast.Option | Taro.showModal.Option,
  ) => void;
  static success: (msg: string, option?: Taro.showToast.Option) => void;
  static error: (msg: string, option?: Taro.showToast.Option) => void;
}

export default Toast;
