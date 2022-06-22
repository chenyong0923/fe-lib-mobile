import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { rpxToPx } from '@/utils/common';
import { RowProps } from '~/types/row';

import RowContext from './RowContext';

const prefix = `${PREFIX}-row`;

const Row: React.FC<RowProps> = ({
  className,
  style,
  children,
  justify,
  align,
  gutter = 0,
}) => {
  const gutters = Array.isArray(gutter) ? gutter : [gutter, 0];
  const rowStyle: React.CSSProperties = {};
  const horizontalGutter =
    gutters[0] > 0 ? rpxToPx(gutters[0] / -2) : undefined;
  const verticalGutter = gutters[1] > 0 ? rpxToPx(gutters[1] / -2) : undefined;

  if (horizontalGutter) {
    rowStyle.marginLeft = horizontalGutter;
    rowStyle.marginRight = horizontalGutter;
  }

  if (verticalGutter) {
    rowStyle.marginTop = verticalGutter;
    rowStyle.marginBottom = verticalGutter;
  }

  const [gutterH, gutterV] = gutters;
  const rowContext = React.useMemo(
    () => ({ gutter: [gutterH, gutterV] as [number, number] }),
    [gutterH, gutterV],
  );

  return (
    <RowContext.Provider value={rowContext}>
      <View
        className={classnames(
          prefix,
          {
            [`${prefix}-${justify}`]: justify,
            [`${prefix}-${align}`]: align,
          },
          className,
        )}
        style={{
          ...rowStyle,
          ...style,
        }}
      >
        {children}
      </View>
    </RowContext.Provider>
  );
};

export default Row;
