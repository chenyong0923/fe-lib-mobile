import { CSSProperties, FC } from 'react';

import { LayoutType } from './common';
import { FormInstance, Rule } from './store';

export interface FormItemProps {
  className?: string;
  style?: CSSProperties;
  name?: string;
  label?: string;
  layout?: LayoutType;
  initialValue?: any;
  rules?: Rule[];
  required?: boolean;
  valueKey?: string;
  trigger?: string;
  validateTrigger?: string;
  valueFormat?: (value: any, name: string, formInstance: FormInstance) => any;
}

declare const FormItem: FC<FormItemProps>;

export default FormItem;
