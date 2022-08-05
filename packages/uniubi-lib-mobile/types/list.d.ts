import { CSSProperties, FC, ReactNode } from 'react';

import { EmptyProps } from '~/types/empty';
import { ScrollWrapperProps } from '~/types/scroll-wrapper';

export interface ListProps
  extends Omit<ScrollWrapperProps, 'loadFinished' | 'style'> {
  style?: CSSProperties;
  emptyProps?: EmptyProps;
  renderItem: (item: any, index: number) => ReactNode;
  list: any[];
  total?: number;
  renderHeader?: ReactNode;
  renderFooter?: ReactNode;
  full?: { customNavHeader: boolean };
}

declare const List: FC<ListProps>;

export default List;
