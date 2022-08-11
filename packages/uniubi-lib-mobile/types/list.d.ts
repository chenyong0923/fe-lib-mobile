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
  header?: ReactNode;
  footer?: ReactNode;
  full?: { customNavHeader: boolean };
}

export interface UseListProps {
  request: (params?: { [key: string]: any }) => Promise<{ [key: string]: any }>;
  responseListKey?: string | string[];
  pagination?:
    | false
    | {
        pageKey: string;
        pageSizeKey: string;
        totalKey: string | string[];
        pageSize?: number;
      };
  defaultParams?: { [key: string]: any };
  manual?: boolean;
}

export interface UserListResults {
  init: () => Promise<any>;
  refresh: () => Promise<any>;
  loadMore: () => Promise<any>;
  list: any[];
  total: number;
  filterFunction: (params: { [key: string]: any }) => Promise<any>;
}

export const useList: (params: UseListProps) => UserListResults;

declare const List: FC<ListProps>;

export default List;
