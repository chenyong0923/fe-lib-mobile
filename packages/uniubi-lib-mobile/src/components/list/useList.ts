import Taro from '@tarojs/taro';
import { useEffect, useMemo, useRef, useState } from 'react';

import { deepGetValue } from '@/utils/common';
import { UseListProps } from '~/types/list';

interface LoadProps {
  page: number;
  loading: boolean;
  loadingType: 'refresh' | 'init' | 'filter' | 'load';
  params?: { [key: string]: any };
}

const useList = (props: UseListProps) => {
  const {
    manual = false,
    request,
    defaultParams,
    responseListKey = 'data',
    pagination = {
      totalKey: ['paginationOutput', 'total'],
      pageKey: 'index',
      pageSizeKey: 'length',
      pageSize: 10,
    },
  } = props;
  // 列表数据
  const [list, setList] = useState<any[]>([]);
  // 列表总数
  const [total, setTotal] = useState<number>(0);
  // 加载变量
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
    // 开始loading
    startLoading();
    // 请求参数
    const requestParams = loadParams.current.params || {};
    if (pagination) {
      const { pageKey, pageSizeKey, pageSize } = pagination;
      pageSizeKey && (requestParams[pageSizeKey] = pageSize || 10);
      pageKey && (requestParams[pageKey] = loadParams.current.page);
    }
    try {
      const resp = await request(
        Object.keys(requestParams)?.length ? requestParams : undefined,
      );
      // 处理请求结果
      dealLoadRequest(resp);
      return resp;
    } catch (e) {
      // 处理请求结果
      dealLoadRequest();
      return false;
    }
  };
  /**
   * 请求结果处理
   * @param resp
   */
  const dealLoadRequest = (resp?: { [key: string]: any }) => {
    if (resp) {
      const listGet = deepGetValue(responseListKey, resp) || [];
      if (pagination) {
        const totalGet = deepGetValue(pagination.totalKey, resp);
        setTotal(totalGet);
        setList((preState) =>
          loadParams.current.page === 1 ? listGet : [...preState, ...listGet],
        );
      } else {
        setTotal(listGet?.length);
        setList(listGet);
      }
    }
    // 结束loading
    stopLoading();
  };
  /**
   * 开始loading
   */
  const startLoading = () => {
    updateLoadParams({
      loading: true,
    });
    const { loadingType } = loadParams.current;
    if (loadingType === 'init' || loadingType === 'filter') {
      Taro.showLoading({ title: 'loading' });
    }
  };
  /**
   * 结束loading
   */
  const stopLoading = () => {
    const { loadingType } = loadParams.current;
    if (loadingType === 'init' || loadingType === 'filter') {
      Taro.hideLoading();
    } else if (loadingType === 'refresh') {
      Taro.stopPullDownRefresh();
    }
    setTimeout(() => {
      updateLoadParams({ loading: false });
    }, 0);
  };
  /**
   * 更新加载变量
   * @param query
   */
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
  /**
   * 初始加载方法
   */
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
      return await loadList();
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
   * @param {{ [key: string]: any }} filterOut 外部传参
   */
  const filterFunction = async (filterOut: Record<string, any>) => {
    updateLoadParams({
      loadingType: 'filter',
    });
    updateLoadParams({
      page: 1,
      params: { ...defaultParams, ...filterOut },
    });
    return loadList();
  };
  /**
   * 是否请求
   */
  const isContinue = () => {
    if (loadParams.current.loadingType === 'load' && total <= list.length) {
      return false;
    }
    if (!loadParams.current.loading) {
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

export default useList;
