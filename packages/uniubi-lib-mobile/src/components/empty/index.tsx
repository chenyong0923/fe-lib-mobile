import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import Image from '@/components/image';
import { DEFAULT_EMPTY_URL, PREFIX } from '@/constants';
import { rpxToPx } from '@/utils/common';
import { EmptyProps } from '~/types/empty';

const prefix = `${PREFIX}-empty`;

const Empty: React.FC<EmptyProps> = ({
  className,
  style,
  src = DEFAULT_EMPTY_URL,
  width = 282,
  height = 280,
  paddingTop = 200,
  tip,
  ...rest
}) => {
  return (
    <View
      className={classnames(prefix, className)}
      style={{
        ...(style as React.CSSProperties),
        paddingTop: rpxToPx(paddingTop),
      }}
    >
      <Image
        className={`${prefix}-image`}
        src={src}
        width={width}
        height={height}
        {...rest}
      />
      <View className={`${prefix}-tip`}>{tip}</View>
    </View>
  );
};

export default Empty;
