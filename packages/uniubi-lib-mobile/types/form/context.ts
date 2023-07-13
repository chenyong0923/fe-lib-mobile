import type { LayoutType, NamePathType } from './common';
import type { FormInstance } from './store';

export interface IFormContext {
  layout: LayoutType;
  instance?: FormInstance;
}

export interface IFormListContext {
  namePath?: NamePathType;
}
