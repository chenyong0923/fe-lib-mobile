import { ScrollViewProps } from '@tarojs/components';
import { FC, ReactNode } from 'react';

export interface ScrollWrapperProps
  extends Pick<
    ScrollViewProps,
    | 'className'
    | 'style'
    | 'scrollTop'
    | 'scrollIntoView'
    | 'scrollWithAnimation'
    | 'enableBackToTop'
    | 'upperThreshold'
    | 'lowerThreshold'
  > {
  enablePullRefresh?: boolean;
  enableLoadMore?: boolean;
  enableEndTip?: false | string;
  allLoaded?: boolean;
  endTip?: string;
  onRefresh?: () => Promise<any>;
  onLoadMore?: () => Promise<any>;
  children?: ReactNode;
}

declare const ScrollWrapper: FC<ScrollWrapperProps>;

export default ScrollWrapper;
