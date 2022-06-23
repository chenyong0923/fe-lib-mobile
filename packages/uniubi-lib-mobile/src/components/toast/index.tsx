import Taro from '@tarojs/taro';

const DEFAULT_TOAST_TIME = 3000;

class Toast {
  /**
   * 短文本提示
   * @param {Taro.showToast.Option} param 同 Taro showToast 方法参数
   */
  static show({
    title = '',
    icon = 'none',
    duration = DEFAULT_TOAST_TIME,
    ...rest
  }: Taro.showToast.Option) {
    Taro.showToast({
      icon,
      title,
      duration,
      ...rest,
    });
  }

  /**
   * 长文本提示
   * @param {Taro.showModal.Option} param 同 Taro showModal 方法参数
   */
  static alert({
    title = '提示',
    showCancel,
    success,
    ...rest
  }: Taro.showModal.Option) {
    Taro.showModal({
      title,
      showCancel: false,
      success: (res) => {
        if (res.confirm) {
          success?.(res);
        }
      },
      ...rest,
    });
  }

  static info(
    msg: string,
    option?: Taro.showToast.Option | Taro.showModal.Option,
  ) {
    if (msg.length > 24) {
      this.alert({
        content: msg,
        ...option,
      });
    } else {
      const {
        title,
        duration = DEFAULT_TOAST_TIME,
        ...rest
      } = (option as Taro.showToast.Option) || {};
      this.show({
        title: msg,
        duration,
        ...rest,
      });
    }
  }

  static success(msg: string, option?: Taro.showToast.Option) {
    const {
      title,
      icon,
      duration = DEFAULT_TOAST_TIME,
      ...rest
    } = option || {};
    this.show({
      title: msg,
      icon: 'success',
      duration,
      ...rest,
    });
  }

  static error(msg: string, option?: Taro.showToast.Option) {
    const {
      title,
      icon,
      duration = DEFAULT_TOAST_TIME,
      ...rest
    } = option || {};
    this.show({
      title: msg,
      icon: 'error',
      duration,
      ...rest,
    });
  }
}

export default Toast;
