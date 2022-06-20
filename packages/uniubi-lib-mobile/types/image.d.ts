import { ImageProps as TaroImageProps } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { FC } from 'react';

export interface ImageProps extends TaroImageProps {
  width?: number;
  height?: number;
  preview?: boolean | Taro.previewImage.Option;
  round?: boolean;
  fallback?: React.ReactNode;
}

declare const Image: FC<ImageProps>;

export default Image;
