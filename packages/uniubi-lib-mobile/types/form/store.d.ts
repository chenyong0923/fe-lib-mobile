import type { NamePathType, Value } from './common';

export interface StoreField {
  value?: Value;
  status?: 'resolved' | 'reject';
  errorMessage?: string;
}

export type Store = Record<string, StoreField>;

export interface RuleOption {
  min?: number;
  max?: number;
  required?: boolean;
  pattern?: RegExp;
  validator?: (value?: Value) => boolean;
}

export interface Rule extends RuleOption {
  message?: string;
}

export interface FieldEntity {
  name: string;
  label?: string;
  rules?: Rule[];
  initialValue?: any;
  controller?: {
    changeValue: () => void;
  };
}

export interface FormInstance<Values = any> {
  getFieldValue: (namePath: NamePathType) => any;
  getFieldsValue: () => Values;
  setFieldValue: (name: NamePathType, value: Value) => void;
  setFieldsValue: (values: Values) => void;
  validateFields: (pos?: boolean) => Promise<Values>;
  resetFields: () => void;
  dispatch: (params: { type: string }, ...arg: any[]) => any;
}

export interface FormInnerHooks {
  registerField: (entity: FieldEntity) => void;
  destroyField: (name: string) => void;
  getFieldStore: (name: string) => StoreField;
  notifyChange: (name: string) => void;
  validate: (rule: Rule, value: Value) => boolean;
  createRules: (label: string, rule: RuleOption) => Rule[];
  registerWatch: (callback: Function) => () => void;
  notifyWatch: (namePath: NamePathType) => void;
}
