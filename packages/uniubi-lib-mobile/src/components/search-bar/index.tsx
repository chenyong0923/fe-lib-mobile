import { View } from '@tarojs/components';
import { SearchOutlined } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React, { useMemo, useState } from 'react';

import { PREFIX } from '@/constants';
import { debounce } from '@/utils/common';

import { SearchBarProps } from '../../../types/search-bar';
import Button from '../button';
import Input from '../input';

const prefixCls = `${PREFIX}-search-bar`;

const SearchBar = ({
  className,
  style,
  icon,
  placeholder,
  circle = false,
  showCancelButton = false,
  clearOnCancel = false,
  duration = 500,
  value,
  onChange,
  onCancel,
}: SearchBarProps) => {
  // 内部输入值，非受控时使用
  const [innerValue, setInnerValue] = useState<string>();

  // 最终输入值
  const _value = useMemo(() => {
    if (value !== undefined) {
      return value;
    }
    return innerValue;
  }, [value, innerValue]);

  const handleChange = (val?: string) => {
    setInnerValue(val);
    onChange?.(val);
  };

  const handleCancel: SearchBarProps['onCancel'] = (e) => {
    if (clearOnCancel) {
      setInnerValue(undefined);
      onChange?.(undefined);
    }
    onCancel?.(e);
  };

  return (
    <View
      className={classnames(
        prefixCls,
        { [`${prefixCls}-circle`]: circle },
        className,
      )}
      style={style}
    >
      <Input
        className={`${prefixCls}-input`}
        placeholder={placeholder}
        prefix={icon ?? <SearchOutlined />}
        value={_value}
        onChange={
          duration === false ? handleChange : debounce(handleChange, duration)
        }
      />
      {showCancelButton && (
        <Button
          className={`${prefixCls}-btn`}
          type="link"
          onClick={handleCancel}
        >
          取消
        </Button>
      )}
    </View>
  );
};

export default SearchBar;
