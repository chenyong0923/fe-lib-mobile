import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { PREFIX } from '@/constants';

import FormContext from './context';
import FormListContext from './listContext';
import { getName } from './utils';

import type { Value } from '~/types/form/common';
import type { FormListProps, ListField } from '~/types/form/list';
import type { FormInstance, StoreField } from '~/types/form/store';
import type { FC } from 'react';

const prefix = `${PREFIX}-form-list`;

const FormList: FC<FormListProps> = ({
  className,
  style,
  children,
  name: namePath,
}) => {
  const { instance } = useContext(FormContext);
  const { dispatch } = instance as FormInstance;
  const [, forceUpdate] = useState({});

  // 字段完整路径
  const name = namePath ? getName(namePath) : undefined;

  // 字段信息仓库，包含字段的值、校验状态、错误提示文字
  const store: StoreField = dispatch({ type: 'getFieldStore' }, name);

  const onStoreChange = useMemo(() => {
    const _onStoreChange = {
      changeValue() {
        forceUpdate({});
      },
    };
    return _onStoreChange;
  }, [instance]);

  useEffect(() => {
    handleFieldRegister();

    return () => {
      dispatch({ type: 'destroyField' }, name);
    };
  }, [onStoreChange]);

  // 将 List 信息注册到 store 中
  const handleFieldRegister = () => {
    if (!name) return;
    dispatch(
      { type: 'registerField' },
      { name, rules: [], controller: onStoreChange },
    );
  };

  const renderChildren = () => {
    if (typeof children !== 'function') return null;
    const fields: ListField[] = (store?.value ?? []).map(
      (_: any, index: number) => ({
        name: `${name}_${index}`,
        isListField: true,
      }),
    );
    // 新增一个列表项
    const handleAdd = (defaultValue?: Value, index?: number) => {
      const value = dispatch({ type: 'getFieldValue' }, name);
      const ret = Array.isArray(value) ? [...value] : [];
      const _index = index ?? ret.length;
      ret.splice(_index, 0, defaultValue ?? {});
      dispatch({ type: 'setFieldValue' }, name, ret);
    };
    // 删除一个列表项
    const handleRemove = (index: number) => {
      const value = dispatch({ type: 'getFieldValue' }, name);
      const newValue = value.filter(
        (_: any, _index: number) => _index !== index,
      );
      dispatch({ type: 'setFieldValue' }, name, newValue);
    };
    // 移动列表项
    const handleMove = (from: number, to: number) => {
      const value = dispatch({ type: 'getFieldValue' }, name);
      const newValue = [...value];
      const element = newValue[from];
      newValue.splice(from, 1);
      newValue.splice(to, 0, element);
      dispatch({ type: 'setFieldValue' }, name, newValue);
    };
    return children(fields, {
      add: handleAdd,
      remove: handleRemove,
      move: handleMove,
    });
  };

  return (
    <FormListContext.Provider value={{ namePath }}>
      <View className={classnames(prefix, className)} style={style}>
        {renderChildren()}
      </View>
    </FormListContext.Provider>
  );
};

export default FormList;
