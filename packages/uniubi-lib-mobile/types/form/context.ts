import type { LayoutType } from './common';
import type { FormInstance } from './store';

export interface IFormContext {
  layout: LayoutType;
  instance?: FormInstance;
}
