import { ITouchEvent, Text, View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { download, extname, getSuffix } from '@/utils/file';

import { FilePreviewProps } from '../../../types/file-preview';
import Toast from '../toast';
import { AUDIO_TYPE, FILE_TYPE, IMAGE_TYPE, VIDEO_TYPE } from './constants';
import Icon from './icon';
import { previewAudio, previewFile, previewImage, previewVideo } from './utils';

const prefixCls = `${PREFIX}-file-preview`;

const FilePreview = ({
  className,
  style,
  name,
  url,
  preview = true,
  onClick,
}: FilePreviewProps) => {
  // 文件后缀
  const suffix = getSuffix(url)?.toLowerCase();

  // 文件预览
  const handlePreview = async () => {
    const path = await download(url);
    if (IMAGE_TYPE.includes(suffix)) {
      previewImage(path);
    } else if (VIDEO_TYPE.includes(suffix)) {
      previewVideo(path);
    } else if (AUDIO_TYPE.includes(suffix)) {
      previewAudio(path);
    } else if (FILE_TYPE.includes(suffix)) {
      previewFile(path);
    } else {
      Toast.error('暂不支持该类型文件');
    }
  };

  const handleClick = (e: ITouchEvent) => {
    if (preview) {
      handlePreview();
    }
    onClick?.(e);
  };

  return (
    <View
      className={classnames(prefixCls, className)}
      style={style}
      onClick={handleClick}
    >
      <Icon type={suffix} />
      <Text className={`${prefixCls}-text`}>{name ?? extname(url)}</Text>
    </View>
  );
};

export default FilePreview;
