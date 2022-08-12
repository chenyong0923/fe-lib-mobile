import { CSSProperties, ReactNode } from 'react';

import { EmptyProps } from '~/types/empty';
import { ScrollWrapperProps } from '~/types/scroll-wrapper';

export interface ListProps<T>
  extends Omit<ScrollWrapperProps, 'loadFinished' | 'style' | 'children'> {
  style?: CSSProperties;
  emptyProps?: EmptyProps;
  renderItem: (item: T, index: number) => ReactNode;
  list: T[];
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

declare const List: (<T extends Record<string, any>>(
  props: ListProps<T>,
) => JSX.Element) & {
  useList: (params: UseListProps) => UserListResults;
};

export default List;
