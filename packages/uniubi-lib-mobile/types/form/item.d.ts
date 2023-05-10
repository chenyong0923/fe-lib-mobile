import type { LayoutType, NamePathType, Value } from './common';
import type { FormInstance, Rule, RuleOption } from './store';
import type { CSSProperties, FC, ReactNode } from 'react';

export interface FormItemProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
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
  valueFormat?: (value: Value, name: string, formInstance: FormInstance) => any;
}

declare const FormItem: FC<FormItemProps>;

export default FormItem;
