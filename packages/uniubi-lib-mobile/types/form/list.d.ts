import type { NamePathType, Value } from './common';
import type { CSSProperties, FC, ReactNode } from 'react';

export interface ListField {
  name: string;
  key: number;
  isListField: boolean;
}

export interface ListOperations {
  add: (defaultValue?: Value, index?: number) => void;
  remove: (index: number) => void;
  move: (from: number, to: number) => void;
}

export interface FormListProps {
  className?: string;
  style?: CSSProperties;
  children?: (fields: ListField[], operations: ListOperations) => ReactNode;
  name?: NamePathType;
}

declare const FormList: FC<FormListProps>;

export default FormList;
