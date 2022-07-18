import { useRef } from 'react';

import { FormInstance } from '~/types/form/store';
import useFormFunction from '~/types/form/useForm';

import FormStore from './store';

const useForm: typeof useFormFunction = (form) => {
  const formRef = useRef<FormInstance>();

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore: FormStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
};

export default useForm;
