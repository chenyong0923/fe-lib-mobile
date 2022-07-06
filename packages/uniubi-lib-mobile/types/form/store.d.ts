export interface StoreField {
  value?: any;
  status?: 'resolved' | 'reject';
  errorMessage?: string;
}

export type Store = Record<string, StoreField>;

export interface Rule {
  min?: number;
  max?: number;
  required?: boolean;
  pattern?: RegExp;
  message?: string;
}

export interface FieldEntity {
  name: string;
  rules?: Rule[];
  initialValue?: any;
  controller?: {
    changeValue: () => void;
  };
}

export interface FormInstance<Values = any> {
  getFieldStore: (name: string) => StoreField;
  getFieldValue: (name: string) => any;
  getFieldsValue: () => Values;
  setFieldValue: (name: string, value: any) => void;
  setFieldsValue: (values: Record<string, any>) => void;
  registerField: (entity: FieldEntity) => void;
  validateField: (name: string) => void;
  validateFields: () => Promise<Record<string, any>>;
  resetFields: () => void;
  notifyChange: (name: string) => void;
  dispatch: (params: { type: string }, ...arg: any[]) => any;
}
