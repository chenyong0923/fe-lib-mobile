import { ImageProps as TaroImageProps } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { FC } from 'react';

export interface ImageProps extends TaroImageProps {
  preview?: boolean | Taro.previewImage.Option;
  round?: boolean;
  width?: number | string;
  height?: number | string;
  fallback?: React.ReactNode;
}

declare const Image: FC<ImageProps>;

export default Image;
