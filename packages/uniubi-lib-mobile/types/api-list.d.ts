import { FC } from 'react';

import { ListProps } from '~/types/list';

export interface ApiListProps extends Omit<ListProps, 'list' | 'total'> {
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

declare const ApiList: FC<ApiListProps>;

export default ApiList;
