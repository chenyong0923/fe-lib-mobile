import { useRef } from 'react';

import FormStore from './store';

import type { FormInstance } from '~/types/form/store';
import type useFormFunction from '~/types/form/useForm';

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
