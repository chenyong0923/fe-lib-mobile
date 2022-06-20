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
import { rpxToPx } from '@/utils/common';
import { ImageProps } from '~/types/image';

const prefix = `${PREFIX}-image`;

const Image: React.FC<ImageProps> = ({
  className,
  style,
  src,
  width = 160,
  height = 160,
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
    // 加载失败
    if (fail)
      return (
        <View className={`${prefix}-fallback`}>
          {fallback ?? (
            <TaroImage
              className={`${prefix}-fallback-image`}
              src="https://fe-cloud.uni-ubi.com/image/1655705985072-image_error.png?x-oss-process=img/q/80"
              mode="aspectFit"
            />
          )}
        </View>
      );

    return (
      <TaroImage
        className={`${prefix}-img`}
        src={src}
        onClick={handlePreview}
        onLoad={() => {
          setFail(false);
        }}
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
        ...(style as React.CSSProperties),
        width: rpxToPx(width),
        height: rpxToPx(height),
      }}
    >
      {renderImage()}
    </View>
  );
};

export default Image;
