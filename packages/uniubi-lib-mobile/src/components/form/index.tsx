import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';

import FormContext from './context';
import Item from './Item';
import List from './List';
import useForm from './useForm';
import useWatch from './useWatch';

import type { FormProps } from '~/types/form';

const prefix = `${PREFIX}-form`;

const Form = ({
  className,
  style,
  children,
  layout = 'horizontal',
  form,
}: FormProps) => {
  const [instance] = useForm(form);

  return (
    <FormContext.Provider value={{ layout, instance }}>
      <View className={classnames(prefix, className)} style={style}>
        {children}
      </View>
    </FormContext.Provider>
  );
};

Form.Item = Item;
Form.List = List;
Form.useForm = useForm;
Form.useWatch = useWatch;

export default Form;
