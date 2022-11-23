import { View } from '@tarojs/components';
import classnames from 'classnames';
import React, {
  cloneElement,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { PREFIX } from '@/constants';
import { rpxToPx } from '@/utils/common';
import { isObj } from '@/utils/validator';
import { FormItemProps } from '~/types/form/item';
import { FormInstance, Rule, RuleOption, StoreField } from '~/types/form/store';

import FormContext from './context';

const prefix = `${PREFIX}-form-item`;

const Item: React.FC<FormItemProps> = ({
  className,
  style,
  children,
  name,
  label,
  labelWidth = 110,
  layout,
  border = true,
  initialValue,
  rules = [],
  required,
  valueKey = 'value',
  trigger = 'onChange',
  validateTrigger = 'onChange',
  valueFormat,
}) => {
  const { layout: formLayout, instance } = useContext(FormContext);
  const { dispatch } = instance as FormInstance;
  const [, forceUpdate] = useState({});

  // 字段完整路径
  const namePath: string = dispatch({ type: 'getName' }, name);

  // 字段信息仓库，包含字段的值、校验状态、错误提示文字
  const store: StoreField = dispatch({ type: 'getFieldStore' }, namePath);

  const onStoreChange = useMemo(() => {
    const _onStoreChange = {
      changeValue() {
        forceUpdate({});
      },
    };
    return _onStoreChange;
  }, [instance]);

  // 布局方式
  const formItemLayout = layout ?? formLayout;

  // label 宽度
  const formItemLabelWidth = useMemo(() => {
    return formItemLayout === 'horizontal' ? rpxToPx(labelWidth) : 'auto';
  }, [formItemLayout, labelWidth]);

  useEffect(() => {
    handleFieldRegister();

    return () => {
      dispatch({ type: 'destroyField' }, namePath);
    };
  }, [onStoreChange]);

  // 字段是否必需，如果存在 required 字段以 required 为准，如果不存在就看 rules 里面有没有必填规则
  const isRequired = useMemo(() => {
    if (required !== undefined) return required;
    if (isObj(rules)) return (rules as RuleOption).required;
    if (Array.isArray(rules)) return rules.some((rule) => rule.required);
    return false;
  }, [required, rules]);

  // 将 Item 信息注册到 store 中
  const handleFieldRegister = () => {
    if (!namePath) return;

    let innerRules: Rule[] = [];
    if (isObj(rules)) {
      innerRules = dispatch({ type: 'createRules' }, label, rules);
    } else if (Array.isArray(rules)) {
      innerRules = [...rules];
    }
    // 补充必填校验
    if (required) {
      const requiredRuleExisted =
        (isObj(rules) && (rules as RuleOption).required) ||
        (Array.isArray(rules) && rules.some((rule) => rule.required));
      if (!requiredRuleExisted) {
        innerRules.unshift({ required: true, message: `请输入${label}` });
      }
    }
    dispatch(
      { type: 'registerField' },
      {
        name: namePath,
        label,
        initialValue,
        rules: innerRules,
        controller: onStoreChange,
      },
    );
  };

  // 使组件受控
  const getControlled = (child: any) => {
    const props = { ...child.props };
    if (!namePath) return props;
    // 处理组件值改变的事件
    const _trigger = props[trigger];
    const handleChange = async (e: any) => {
      let value = null;
      if (valueFormat) {
        value = await valueFormat(e, namePath, instance as FormInstance);
      } else {
        value = e;
      }
      dispatch({ type: 'setFieldValue' }, namePath, value);
      if (_trigger) _trigger(e);
    };
    props[trigger] = handleChange;
    // 进行校验
    if (required || rules) {
      props[validateTrigger] = async (e: any) => {
        if (validateTrigger === trigger) {
          await handleChange(e);
        }

        dispatch({ type: 'validateField' }, namePath);
      };
    }
    props[valueKey] = dispatch({ type: 'getFieldValue' }, namePath);

    return props;
  };

  const renderChildren = isValidElement(children)
    ? cloneElement(children, getControlled(children))
    : children;

  return (
    <View
      className={classnames(
        prefix,
        { [`${prefix}-${formItemLayout}`]: formItemLayout },
        className,
      )}
      style={style}
      id={namePath}
    >
      <View
        className={classnames(`${prefix}-inner`, {
          [`${prefix}-inner-border`]: border,
        })}
      >
        <View
          className={classnames(`${prefix}-label`, {
            [`${prefix}-label-required`]: isRequired,
          })}
          style={{ width: formItemLabelWidth }}
        >
          {label}
        </View>
        <View className={`${prefix}-content`}>
          <View>{renderChildren}</View>
        </View>
      </View>
      <View className={`${prefix}-error`}>{store?.errorMessage}</View>
    </View>
  );
};

export default Item;
