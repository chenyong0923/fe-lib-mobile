import Taro from '@tarojs/taro';
import { useEffect, useMemo, useRef, useState } from 'react';

import { getValueByKeys } from '@/utils/common';
import { UsePageListProps } from '~/types/api-list';

interface LoadProps {
  page: number;
  loading: boolean;
  loadingType: 'refresh' | 'init' | 'filter' | 'load';
  params?: { [key: string]: any };
}

const usePageList = (props: UsePageListProps) => {
  const {
    manual = false,
    loadListApi,
    defaultParams,
    refreshExt,
    pageSize = 10,
    requestPageKey,
    requestPageSizeKey,
    responseListKey = 'data',
    responseTotalKey,
  } = props;
  // 列表数据
  const [list, setList] = useState<any[]>([]);
  // 列表总数
  const [total, setTotal] = useState<number>(0);
  const loadParams = useRef<LoadProps>({
    loadingType: 'init',
    loading: false,
    page: 1,
    params: defaultParams,
  });

  // 初始加载
  useEffect(() => {
    !manual && init();
  }, []);
  /**
   * 加载并更新数据
   */
  const loadList = async () => {
    startLoading();
    const requestParams = loadParams.current.params || {};
    requestPageSizeKey && (requestParams[requestPageSizeKey] = pageSize);
    requestPageKey && (requestParams[requestPageKey] = loadParams.current.page);
    try {
      const resp = await loadListApi(
        Object.keys(requestParams)?.length ? requestParams : undefined,
      );
      console.log('resp', resp);
      dealLoadRequest(resp);
      return resp;
    } catch (e) {
      dealLoadRequest();
      return false;
    }
  };
  const dealLoadRequest = (resp?: { [key: string]: any }) => {
    if (resp) {
      const listGet = getValueByKeys(responseListKey, resp) || [];
      if (responseTotalKey) {
        const totalGet = getValueByKeys(responseTotalKey, resp);
        setTotal(totalGet);
        setList((preState) =>
          loadParams.current.page === 1 ? listGet : [...preState, ...listGet],
        );
      } else {
        setTotal(listGet?.length);
        setList(listGet);
      }
    }
    loadParams.current.loadingType === 'refresh' && Taro.stopPullDownRefresh();
    stopLoading();
    setTimeout(() => {
      updateLoadParams({ loading: false });
    }, 0);
  };
  const startLoading = () => {
    const { loadingType } = loadParams.current;
    if (loadingType === 'init' || loadingType === 'filter') {
      Taro.showLoading({ title: 'loading' });
    }
  };
  const stopLoading = () => {
    const { loadingType } = loadParams.current;
    if (loadingType === 'init' || loadingType === 'filter') {
      Taro.hideLoading();
    }
  };
  const updateLoadParams = (query: {
    page?: number;
    loading?: boolean;
    loadingType?: 'refresh' | 'init' | 'filter' | 'load';
    params?: { [key: string]: any };
  }) => {
    loadParams.current = {
      ...loadParams.current,
      ...query,
    };
  };
  const init = async () => {
    updateLoadParams({
      loadingType: 'init',
    });
    if (isContinue()) {
      updateLoadParams({ page: 1, params: defaultParams });
      return loadList();
    }
  };
  /**
   * 触发刷新方法
   */
  const refresh = async () => {
    updateLoadParams({
      loadingType: 'refresh',
    });
    if (isContinue()) {
      updateLoadParams({ page: 1 });
      const resp = await loadList();
      refreshExt && refreshExt();
      return resp;
    }
  };
  /**
   * 触发加载更多方法
   */
  const loadMore = async () => {
    updateLoadParams({
      loadingType: 'load',
    });
    if (isContinue()) {
      updateLoadParams({ page: loadParams.current.page + 1 });
      return loadList();
    }
  };
  /**
   * 触发筛选方法
   */
  const filterFunction = async (filterOut: { [key: string]: any }) => {
    updateLoadParams({
      loadingType: 'filter',
    });
    if (isContinue()) {
      updateLoadParams({
        page: 1,
        params: { ...defaultParams, ...filterOut },
      });
      return loadList();
    }
  };
  /**
   * 是否请求
   */
  const isContinue = () => {
    if (loadParams.current.loadingType === 'load' && total <= list.length) {
      return false;
    }
    if (!loadParams.current.loading) {
      updateLoadParams({
        loading: true,
      });
      return true;
    } else {
      return false;
    }
  };
  return useMemo(
    () => ({ init, refresh, loadMore, filterFunction, list, total }),
    [list, total],
  );
};

export default usePageList;
