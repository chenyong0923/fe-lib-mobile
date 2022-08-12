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
  request: (params?: Record<string, any>) => Promise<Record<string, any>>;
  responseListKey?: string | string[];
  pagination?:
    | false
    | {
        pageKey: string;
        pageSizeKey: string;
        totalKey: string | string[];
        pageSize?: number;
      };
  defaultParams?: Record<string, any>;
  manual?: boolean;
}

export interface UserListResults<DataType> {
  init: () => Promise<any>;
  refresh: () => Promise<any>;
  loadMore: () => Promise<any>;
  list: DataType[];
  total: number;
  filterFunction: (params: Record<string, any>) => Promise<any>;
}

export type UseListType = <DataType extends Record<string, any> = any>(
  params: UseListProps,
) => UserListResults<DataType>;

export type ListType = (<DataType extends Record<string, any> = any>(
  props: ListProps<DataType>,
) => JSX.Element) & {
  useList: UseListType;
};

declare const List: ListType;

export default List;
