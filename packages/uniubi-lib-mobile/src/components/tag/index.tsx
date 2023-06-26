import { Text, View } from '@tarojs/components';
import { CloseOutlined } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React, { useMemo } from 'react';

import { hexToRgb } from '@/utils/color';

import { TagProps } from '../../../types/tag';

const prefixCls = 'ulm-tag';

const Tag = ({
  className,
  style,
  children,
  size = 'default',
  color,
  icon,
  border = true,
  round = false,
  fill = false,
  closable = false,
  onClick,
  onClose,
}: TagProps) => {
  // 字体颜色、背景颜色、边框颜色
  const mergeStyle = useMemo(() => {
    if (color) {
      // 预设颜色
      const presetColorMap = {
        success: '#46CF84',
        processing: '#4766FF',
        warning: '#FFA42E',
        error: '#FF4747',
      };
      const _color = presetColorMap[color] ?? color;
      const { r, g, b } = hexToRgb(_color) ?? {};
      if (fill) {
        return Object.assign({}, style, {
          backgroundColor: _color,
          color: '#fff',
          borderColor: _color,
        });
      } else {
        return Object.assign({}, style, {
          backgroundColor: `rgba(${r},${g},${b},0.1)`,
          color: _color,
          borderColor: _color,
        });
      }
    }
    return style;
  }, [color, style, fill]);

  return (
    <View
      className={classnames(
        prefixCls,
        `${prefixCls}-${size}`,
        {
          [`${prefixCls}-border`]: border,
          [`${prefixCls}-round`]: round,
          [`${prefixCls}-fill`]: fill,
        },
        className,
      )}
      style={mergeStyle}
      onClick={onClick}
    >
      {icon}
      <Text className={`${prefixCls}-content`}>{children}</Text>
      {closable && (
        <CloseOutlined
          className={`${prefixCls}-close`}
          onClick={(e) => {
            e.stopPropagation();
            onClose?.(e);
          }}
        />
      )}
    </View>
  );
};

export default Tag;
