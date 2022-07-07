import { FC } from 'react';

import { EmptyProps } from '~/types/empty';

// 微信——ScrollView refresh组件方案
// 钉钉&支付宝不支持改头部——页面结合View方案
// H5页面没有加载方案——ScrollView

export interface ListProps {
  loading?: boolean;
  loadingType?: boolean;
  enablePullRefresh?: boolean;
  enableLoadMore?: boolean;
  showLastTip?: boolean;
  lastTip?: string;
  emptyProps?: EmptyProps;
}

declare const List: FC<ListProps>;

export default List;
