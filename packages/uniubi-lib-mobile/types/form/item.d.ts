import { CSSProperties, FC, ReactNode } from 'react';

import { LayoutType, NamePathType } from './common';
import { FormInstance, Rule, RuleOption } from './store';

export interface FormItemProps {
  className?: string;
  style?: CSSProperties;
  name?: NamePathType;
  label?: ReactNode;
  labelWidth?: number;
  layout?: LayoutType;
  border?: boolean;
  initialValue?: any;
  rules?: Rule[] | RuleOption;
  required?: boolean;
  valueKey?: string;
  trigger?: string;
  validateTrigger?: string;
  valueFormat?: (value: any, name: string, formInstance: FormInstance) => any;
}

declare const FormItem: FC<FormItemProps>;

export default FormItem;
