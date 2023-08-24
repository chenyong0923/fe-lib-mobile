import { View } from '@tarojs/components';
import {
  AacMulticolored,
  ApeMulticolored,
  AviMulticolored,
  DocxMulticolored,
  FlaMulticolored,
  FlvMulticolored,
  ImageMulticolored,
  M4aMulticolored,
  M4vMulticolored,
  MkvMulticolored,
  Mp3Multicolored,
  Mp4Multicolored,
  MpgMulticolored,
  OtherMulticolored,
  PdfTxtMulticolored,
  PPTMulticolored,
  RarMulticolored,
  TxtMulticolored,
  WavMulticolored,
  WmaMulticolored,
  WmvMulticolored,
  XlxsMulticolored,
  ZipMulticolored,
} from '@uniubi/icons-taro';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import { FilePreviewIconProps } from '../../../types/file-preview/icon';

const prefixCls = `${PREFIX}-file-preview-icon`;

const Icon = ({ className, style, type }: FilePreviewIconProps) => {
  const suffixMap = new Map([
    ['.png', <ImageMulticolored />],
    ['.jpeg', <ImageMulticolored />],
    ['.jpg', <ImageMulticolored />],
    ['.gif', <ImageMulticolored />],
    ['.webp', <ImageMulticolored />],
    ['.xls', <XlxsMulticolored />],
    ['.xlsx', <XlxsMulticolored />],
    ['.ppt', <PPTMulticolored />],
    ['.pptx', <PPTMulticolored />],
    ['.pdf', <PdfTxtMulticolored />],
    ['.txt', <TxtMulticolored />],
    ['.m4a', <M4aMulticolored />],
    ['.wav', <WavMulticolored />],
    ['.aac', <AacMulticolored />],
    ['.mp3', <Mp3Multicolored />],
    ['.wma', <WmaMulticolored />],
    ['.ape', <ApeMulticolored />],
    ['.wmv', <WmvMulticolored />],
    ['.mov', <FlaMulticolored />],
    ['.mpg', <MpgMulticolored />],
    ['.api', <AviMulticolored />],
    ['.mp4', <Mp4Multicolored />],
    ['.mkv', <MkvMulticolored />],
    ['.m4v', <M4vMulticolored />],
    ['.flv', <FlvMulticolored />],
    ['.zip', <ZipMulticolored />],
    ['.rar', <RarMulticolored />],
    ['.docx', <DocxMulticolored />],
    ['.doc', <DocxMulticolored />],
  ]);

  const renderIcon = () => {
    if (!type) {
      return <OtherMulticolored />;
    }
    return suffixMap.get(type.toLowerCase()) ?? <OtherMulticolored />;
  };

  return (
    <View className={classnames(prefixCls, className)} style={style}>
      {React.cloneElement(renderIcon(), {
        style: {
          display: 'block',
        },
        size: 32,
      })}
    </View>
  );
};

export default Icon;
