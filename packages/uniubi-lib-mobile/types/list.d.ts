import { ScrollViewProps } from '@tarojs/components';
import { FC, ReactNode } from 'react';

import { EmptyProps } from '~/types/empty';

export interface LoadListResponse {
  total: number;
  list: any[];
}

export interface LoadListRequest {
  page?: number;
  pageSize?: number;
  [key: string]: any;
}

// 微信——ScrollView refresh组件方案
// 钉钉&支付宝不支持改头部——页面结合View方案
// H5页面没有加载方案——ScrollView
export interface ListProps
  extends Pick<
    ScrollViewProps,
    | 'className'
    | 'style'
    | 'upperThreshold'
    | 'lowerThreshold'
    | 'scrollTop'
    | 'scrollIntoView'
    | 'enableBackToTop'
  > {
  enablePullRefresh?: boolean;
  enableLoadMore?: boolean;
  enableLastTip?: boolean;
  lastTip?: string;
  emptyProps?: EmptyProps;
  renderItem: (item: any, index: number) => ReactNode;
  loadList: (params: LoadListRequest) => Promise<LoadListResponse | any[]>;
  filterInit?: { [key: string]: any };
}

declare const List: FC<ListProps>;

export default List;
