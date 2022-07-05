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
import { FormItemProps } from '~/types/form/item';
import { FormInstance } from '~/types/form/store';

import FormContext from './context';

const prefix = `${PREFIX}-form-item`;

const Item: React.FC<FormItemProps> = ({
  className,
  style,
  children,
  name,
  label,
  layout,
  initialValue,
  rules = [],
  required,
  valueKey = 'value',
  trigger = 'onChange',
  // validateTrigger = 'onChange',
  valueFormat,
}) => {
  const { layout: formLayout, instance } = useContext(FormContext);
  const { registerField, dispatch } = instance as FormInstance;
  const [, forceUpdate] = useState({});

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

  useEffect(() => {
    handleFieldRegister();
  }, [onStoreChange]);

  // 字段是否必需，如果存在 required 字段以 required 为准，如果不存在就看 rules 里面有没有必填规则
  const isRequired = useMemo(() => {
    return required !== undefined
      ? required
      : rules.some((rule) => rule.required);
  }, [required, rules]);

  // 将 Item 信息注册到 store 中
  const handleFieldRegister = () => {
    if (!name) return;
    const innerRules = [...rules];
    // 补充必填校验
    if (required) {
      const requiredRuleExisted = rules.some((rule) => rule.required);
      if (!requiredRuleExisted) {
        innerRules.unshift({ required: true });
      }
    }
    registerField({
      name,
      initialValue,
      rules: innerRules,
      controller: onStoreChange,
    });
  };

  // 使组件受控
  const getControlled = (child: any) => {
    const props = { ...child.props };
    if (!name) return props;
    // 处理组件值改变的事件
    const _trigger = props[trigger];
    const handleChange = async (e: any) => {
      let value = null;
      if (valueFormat) {
        value = await valueFormat(e, name, instance as FormInstance);
      } else {
        value = e.detail;
      }
      dispatch({ type: 'setFieldValue' }, name, value);
      if (_trigger) _trigger(e);
    };
    props[trigger] = handleChange;
    // 进行校验
    // if (required || rules) {
    //   props[validateTrigger] = async (e: any) => {
    //     if (validateTrigger === trigger) {
    //       await handleChange(e);
    //     }

    //     dispatch({ type: 'validateFieldValue' }, name);
    //   };
    // }
    props[valueKey] = dispatch({ type: 'getFieldValue' }, name);
    console.log('valueKey', valueKey, props[valueKey]);

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
    >
      <View
        className={classnames(`${prefix}-label`, {
          [`${prefix}-label-required`]: isRequired,
        })}
      >
        {label}
      </View>
      <View className={`${prefix}-content`}>{renderChildren}</View>
    </View>
  );
};

export default Item;
