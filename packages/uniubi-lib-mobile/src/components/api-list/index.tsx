import classnames from 'classnames';
import React, { useImperativeHandle } from 'react';

import List from '@/components/list';
import { PREFIX } from '@/constants';
import usePageList from '@/utils/usePageList';
import { ApiListProps } from '~/types/api-list';

const prefix = `${PREFIX}-api-list`;

const ApiList = React.forwardRef(
  (
    {
      loadListApi,
      responseListKey,
      responseTotalKey,
      requestPageKey,
      requestPageSizeKey,
      defaultParams,
      searchProps,
      className,
      pageSize,
      manual,
      refreshExt,
      ...rest
    }: ApiListProps,
    ref,
  ) => {
    const { list, total, refresh, loadMore, init, filterFunction } =
      usePageList({
        loadListApi,
        responseListKey,
        responseTotalKey,
        requestPageKey,
        requestPageSizeKey,
        defaultParams,
        pageSize,
        manual,
        refreshExt,
      });
    useImperativeHandle(ref, () => ({
      init,
      filterFunction,
    }));
    return (
      <List
        className={classnames(prefix, className)}
        list={list}
        total={total}
        onRefresh={refresh}
        onLoadMore={loadMore}
        {...rest}
      />
    );
  },
);

export default ApiList;
