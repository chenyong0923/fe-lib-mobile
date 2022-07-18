import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { FormProps } from '~/types/form';

import FormContext from './context';
import Item from './Item';
import useForm from './useForm';

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
Form.useForm = useForm;

export default Form;
