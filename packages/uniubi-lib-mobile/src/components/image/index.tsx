import {
  CommonEventFunction,
  Image as TaroImage,
  ImageProps as TaroImageProps,
  View,
} from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import React, { useState } from 'react';

import { PREFIX } from '@/constants';
import { ImageProps } from '~/types/image';

const prefix = `${PREFIX}-image`;

const Image: React.FC<ImageProps> = ({
  className,
  style,
  src,
  width,
  height,
  preview = false,
  round = false,
  fallback,
  onError,
  ...rest
}) => {
  // 加载失败
  const [fail, setFail] = useState<boolean>(false);

  // 处理加载失败
  const handleLoadError: CommonEventFunction<
    TaroImageProps.onErrorEventDetail
  > = (e) => {
    setFail(true);
    onError?.(e);
  };

  // 预览
  const handlePreview = () => {
    if (typeof preview === 'boolean') {
      if (!preview) return;
      Taro.previewImage({ urls: [src] });
    } else {
      // 自定义配置
      Taro.previewImage(preview);
    }
  };

  const renderImage = () => {
    if (fail) return <View className={`${prefix}-fallback`}>{fallback}</View>;

    return (
      <TaroImage
        className={`${prefix}-img`}
        src={src}
        onClick={handlePreview}
        onError={handleLoadError}
        {...rest}
      />
    );
  };

  return (
    <View
      className={classnames(
        prefix,
        { [`${prefix}-round`]: round, [`${prefix}-error`]: fail },
        className,
      )}
      style={{
        width,
        height,
        ...(style as React.CSSProperties),
      }}
    >
      {renderImage()}
    </View>
  );
};

export default Image;
