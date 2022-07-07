export interface StoreField {
  value?: any;
  status?: 'resolved' | 'reject';
  errorMessage?: string;
}

export type Store = Record<string, StoreField>;

export interface RuleOption {
  min?: number;
  max?: number;
  required?: boolean;
  pattern?: RegExp;
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
  getFieldValue: (name: string) => any;
  getFieldsValue: () => Values;
  setFieldValue: (name: string, value: any) => void;
  setFieldsValue: (values: Record<string, any>) => void;
  validateFields: (pos?: boolean) => Promise<Record<string, any>>;
  resetFields: () => void;
  dispatch: (params: { type: string }, ...arg: any[]) => any;
}

export interface FormInnerHooks {
  registerField: (entity: FieldEntity) => void;
  getFieldStore: (name: string) => StoreField;
  notifyChange: (name: string) => void;
  validate: (rule: Rule, value: any) => boolean;
  createRules: (label: string, rule: RuleOption) => Rule[];
}
