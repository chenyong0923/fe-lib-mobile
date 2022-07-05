import { ReactElement } from 'react';

export type Store = Record<string, any>;

export interface Rule {
  min?: number;
  max?: number;
  required?: boolean;
  len?: number;
  message?: string | ReactElement;
}

export interface FieldEntity {
  name?: string;
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
  setFieldsValue: (store: Store) => void;
  registerField: (entity: FieldEntity) => void;
  notifyChange: (name: string) => void;
  dispatch: (params: { type: string }, ...arg: any[]) => any;
}
