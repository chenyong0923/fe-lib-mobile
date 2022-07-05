import { FieldEntity, FormInstance, Store } from '~/types/form/store';

import { set } from './utils';

const formInstanceApi = [
  'getFieldValue',
  'getFieldsValue',
  'setFieldValue',
  'setFieldsValue',
  'registerField',
  'dispatch',
];

class FormStore {
  private store: Store;
  private fieldEntities: FieldEntity[];

  constructor() {
    this.store = {};
    this.fieldEntities = [];
  }

  getForm = (): FormInstance => ({
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    setFieldValue: this.setFieldValue,
    setFieldsValue: this.setFieldsValue,
    registerField: this.registerField,
    notifyChange: this.notifyChange,
    dispatch: this.dispatch,
  });

  private dispatch = (action: { type: string }, ...arg: any[]) => {
    if (!action && typeof action !== 'object') return null;
    const { type } = action;
    if (formInstanceApi.includes(type)) {
      return this[type](...arg);
    }
  };

  /**
   * 将字段注册到 store 中
   * @param {FieldEntity} entity 字段实体
   */
  private registerField = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);
    const { name, initialValue } = entity;
    if (!name) return;
    this.updateStore(set(this.store, name, initialValue));
  };

  /**
   * 获取某个字段的值
   * @param {String} name 字段名
   * @returns 字段的值
   */
  private getFieldValue = (name: string) => {
    return this.store[name];
  };

  /**
   * 获取所有字段的值
   * @returns 表单键值对
   */
  private getFieldsValue = () => {
    return { ...this.store };
  };

  /**
   * 修改 store 中字段的值
   * @param {String} name
   * @returns
   */
  private setFieldValue = (name: string, value: any) => {
    if (name in this.store) {
      this.store[name] = value;
      this.notifyChange(name);
    }
  };

  /**
   * 修改 store 所有值
   * @param {Store} store
   * @returns
   */
  private setFieldsValue = (store: Store) => {
    Object.keys(store).forEach((key) => {
      this.setFieldValue(key, store[key]);
    });
  };

  private notifyChange(name: string) {
    const field = this.fieldEntities.find((item) => item.name === name);
    if (field) field.controller?.changeValue();
  }

  /**
   * 更新 store
   * @param {Store} nextStore 新 store
   */
  private updateStore = (nextStore: Store) => {
    this.store = nextStore;
  };
}

export default FormStore;
