import { FC, ReactNode } from 'react';

import { EmptyProps } from '~/types/empty';
import { ScrollWrapperProps } from '~/types/scroll-wrapper';

export interface ListProps extends Omit<ScrollWrapperProps, 'loadFinished'> {
  emptyProps?: EmptyProps;
  renderItem: (item: any, index: number) => ReactNode;
  list: any[];
  total?: number;
  renderHeader?: ReactNode;
  renderFooter?: ReactNode;
  full?: boolean;
}

export interface ApiListProps
  extends Omit<ListProps, 'list' | 'total' | 'renderItem'> {
  loadListApi: (params?: {
    [key: string]: any;
  }) => Promise<{ data?: any; [key: string]: any }>;
  responseListKey?: string | string[];
  responseTotalKey?: string | string[];
  requestPageKey?: string;
  requestPageSizeKey?: string;
  defaultParams?: { [key: string]: any };
  searchProps?: any;
}

declare const List: FC<ListProps>;

export default List;
