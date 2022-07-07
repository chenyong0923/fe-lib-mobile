import { isInvalid } from '@/utils/common';
import {
  FieldEntity,
  FormInnerHooks,
  FormInstance,
  Rule,
  RuleOption,
  Store,
} from '~/types/form/store';

import { ValidateResult } from './constants';

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
    validateFields: this.validateFields,
    resetFields: this.resetFields,
    dispatch: this.dispatch,
  });

  getInnerHooks = (): FormInnerHooks => ({
    getFieldStore: this.getFieldStore,
    notifyChange: this.notifyChange,
    validate: this.validate,
    createRules: this.createRules,
  });

  private dispatch = (action: { type: string }, ...arg: any[]) => {
    if (!action && typeof action !== 'object') return null;
    const { type } = action;
    const formApi = { ...this.getForm(), ...this.getInnerHooks() };
    if (Object.keys(formApi).includes(type)) {
      return this[type](...arg);
    }
  };

  /**
   * 获取字段在 store 中的信息（值、校验状态、错误提示语）
   * @param {String} name 字段名
   * @returns 字段信息
   */
  private getFieldStore = (name: string) => {
    return { ...this.store[name] };
  };

  /**
   * 获取字段信息
   * @param {String} name 字段名
   * @returns 字段信息
   */
  private getField = (name: string) => {
    return this.fieldEntities.find((item) => item.name === name);
  };

  /**
   * 将字段注册到 store 中
   * @param {FieldEntity} entity 字段实体
   */
  private registerField = (entity: FieldEntity) => {
    this.fieldEntities.push(entity);
    const { name, initialValue } = entity;
    if (!name) return;
    this.store[name] = {
      value: initialValue,
      status: ValidateResult.Resolved,
      errorMessage: undefined,
    };
    this.validateField(name);
  };

  /**
   * 获取某个字段的值
   * @param {String} name 字段名
   * @returns 字段的值
   */
  private getFieldValue = (name: string) => {
    return this.store[name]?.value;
  };

  /**
   * 获取所有字段的值
   * @returns 表单键值对
   */
  private getFieldsValue = () => {
    const ret = {};
    Object.keys(this.store).forEach((field) => {
      ret[field] = this.store[field].value;
    });
    return ret;
  };

  /**
   * 修改 store 中字段的值
   * @param {String} name
   * @returns
   */
  private setFieldValue = (name: string, value: any) => {
    if (name in this.store) {
      this.store[name].value = value;
      this.validateField(name);
    }
  };

  /**
   * 修改 store 所有值
   * @param {Record<string, any>} values 键值对
   * @returns
   */
  private setFieldsValue = (values: Record<string, any>) => {
    Object.keys(values).forEach((key) => {
      this.setFieldValue(key, values[key]);
    });
  };

  /**
   * 通知 FormItem 组件更新
   * @param {String} name 字段名
   */
  private notifyChange = (name: string) => {
    const field = this.getField(name);
    if (field) field.controller?.changeValue();
  };

  /**
   * 校验字段是否通过所有规则
   * @param {String} name 字段名
   */
  private validateField = (name: string) => {
    const field = this.getField(name);
    if (field?.rules) {
      const result = field.rules.every((rule) => {
        const ret = this.validate(rule, this.store[name].value);
        // 当校验不通过时，把当前规则的提示信息存入 store
        if (!ret) {
          this.store[name].errorMessage = rule.message;
        }
        return ret;
      });
      if (result) {
        this.store[name].status = ValidateResult.Resolved;
        this.store[name].errorMessage = undefined;
      } else {
        this.store[name].status = ValidateResult.Reject;
      }
    }
    this.notifyChange(name);
  };

  /**
   * 校验所有字段
   * @returns 如果校验通过，返回所有字段的键值对，否则返回校验失败的字段名数组
   */
  private validateFields = async () => {
    Object.keys(this.store).forEach((field) => {
      this.validateField(field);
    });
    const errorFields = Object.entries(this.store)
      .filter((item) => item[1].status === ValidateResult.Reject)
      .map((item) => item[0]);
    if (errorFields.length) {
      return Promise.reject(errorFields);
    } else {
      return Promise.resolve(this.getFieldsValue());
    }
  };

  /**
   * 将所有字段重置到初始值
   */
  private resetFields = () => {
    this.fieldEntities.forEach((item) => {
      this.setFieldValue(item.name, item.initialValue);
    });
  };

  /**
   * 校验值是否符合规则
   * @param {Rule} rule 规则对象
   * @param {any} value 需要校验的值
   * @returns 是否通过校验
   */
  private validate = (rule: Rule, value: any) => {
    const { min, max, required, pattern } = rule;
    // 校验必填
    if (required) {
      if (typeof value === 'string') return value !== '';
      return !isInvalid(value);
    }
    // 校验长度或大小
    if (max || min) {
      const val = typeof value === 'number' ? value : value.length;
      if (max && min) {
        return val >= min && val <= max;
      } else if (max && isInvalid(min)) {
        return val <= max;
      } else if (min && isInvalid(max)) {
        return val >= min;
      }
    }
    // 校验正则
    if (pattern) {
      return pattern.test(value);
    }
    return true;
  };

  /**
   * 生成校验规则
   * @param {String} label 标签
   * @param {RuleOption} rule 规则对象
   * @returns 规则数组
   */
  private createRules = (label: string, rule: RuleOption) => {
    const { required, min, max, pattern } = rule;
    const rules: Rule[] = [];
    if (required) {
      rules.push({ required: true, message: `请输入${label}` });
    }
    if (min || max) {
      if (max && min) {
        if (max === min) {
          rules.push({ min, max, message: `请输入${max}位${label}` });
        } else {
          rules.push({
            min,
            max,
            message: `请输入${min}-${max}位${label}`,
          });
        }
      } else if (max && isInvalid(min)) {
        rules.push({ max, message: `请输入不超过${max}位${label}` });
      } else if (min && isInvalid(max)) {
        rules.push({ max, message: `请输入不少于${max}位${label}` });
      }
    }
    if (pattern) {
      rules.push({ pattern, message: '输入格式不正确' });
    }
    console.log('createRules', rules);
    return rules;
  };
}

export default FormStore;
