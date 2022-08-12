import { CSSProperties, FC, ReactNode } from 'react';

import { LayoutType } from './common';
import Item from './item';
import { FormInstance } from './store';
import useForm from './useForm';

export interface FormProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  layout?: LayoutType;
  form?: FormInstance;
}

const InternalForm: FC<FormProps>;

type InternalFormType = typeof InternalForm;

interface IForm extends InternalFormType {
  Item: typeof Item;
  useForm: typeof useForm;
}

declare const Form: IForm;

export default Form;