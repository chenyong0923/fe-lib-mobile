import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useContext } from 'react';

import { PREFIX } from '@/constants';
import { rpxToPx } from '@/utils/common';
import { ColProps } from '~/types/col';

import RowContext from './RowContext';

const prefix = `${PREFIX}-col`;

const Col: React.FC<ColProps> = ({
  className,
  style,
  children,
  span,
  offset = 0,
}) => {
  const { gutter } = useContext(RowContext);

  const colStyle: React.CSSProperties = {};

  if (gutter?.[0] && gutter[0] > 0) {
    const horizontalGutter = rpxToPx(gutter[0] / 2);
    colStyle.paddingLeft = horizontalGutter;
    colStyle.paddingRight = horizontalGutter;
  }

  if (gutter?.[1] && gutter[1] > 0) {
    const verticalGutter = rpxToPx(gutter[1] / 2);
    colStyle.paddingTop = verticalGutter;
    colStyle.paddingBottom = verticalGutter;
  }

  return (
    <View
      className={classnames(
        prefix,
        { [`${prefix}-${span}`]: span, [`${prefix}-offset-${offset}`]: offset },
        className,
      )}
      style={{ ...colStyle, ...style }}
    >
      {children}
    </View>
  );
};

export default Col;
