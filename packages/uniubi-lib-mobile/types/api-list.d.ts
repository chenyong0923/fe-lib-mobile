import { FC } from 'react';

import { ListProps } from '~/types/list';

export interface UsePageListProps {
  loadListApi: (params?: {
    [key: string]: any;
  }) => Promise<{ data?: any; [key: string]: any }>;
  responseListKey?: string | string[];
  responseTotalKey?: string | string[];
  requestPageKey?: string;
  requestPageSizeKey?: string;
  pageSize?: number;
  defaultParams?: { [key: string]: any };
  manual?: boolean;
  refreshExt?: () => void;
}

export interface ApiListProps
  extends Omit<ListProps, 'list' | 'total' | 'onRefresh' | 'onLoadMore'>,
    UsePageListProps {
  searchProps?: any;
}

declare const ApiList: FC<ApiListProps>;

export default ApiList;
