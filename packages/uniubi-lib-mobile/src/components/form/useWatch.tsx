import { useEffect, useState } from 'react';

import { getName } from './utils';

import type { Value } from '~/types/form/common';
import type useWatchFunction from '~/types/form/useWatch';

const useWatch: typeof useWatchFunction = (namePath, form) => {
  const { dispatch } = form;
  // 字段名
  const name = getName(namePath);
  // 监听字段的值
  const [value, setValue] = useState<Value>();

  useEffect(() => {
    // 注册监听
    const unRegister = dispatch(
      { type: 'registerWatch' },
      (fileName: string, v: Value) => {
        if (fileName === name) {
          setValue(v);
        }
      },
    );

    return () => {
      unRegister();
    };
  }, []);

  return value;
};

export default useWatch;
