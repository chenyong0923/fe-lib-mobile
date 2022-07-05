import { LayoutType } from './common';
import { FormInstance } from './store';

export interface IFormContext {
  layout: LayoutType;
  instance?: FormInstance;
}
