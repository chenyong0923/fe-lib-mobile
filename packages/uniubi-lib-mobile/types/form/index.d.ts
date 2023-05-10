import Item from './item';
import useForm from './useForm';
import useWatch from './useWatch';

import type { LayoutType } from './common';
import type { FormInstance } from './store';
import type { CSSProperties, FC, ReactNode } from 'react';

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
  useWatch: typeof useWatch;
}

declare const Form: IForm;

export default Form;
