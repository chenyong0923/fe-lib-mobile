import React, { FC } from 'react';

import { ImageProps } from '~/types/image';

export interface EmptyProps extends Omit<ImageProps, 'src'> {
  src?: string;
  tip?: string | React.ReactNode;
  paddingTop?: number;
}

declare const Empty: FC<EmptyProps>;

export default Empty;
