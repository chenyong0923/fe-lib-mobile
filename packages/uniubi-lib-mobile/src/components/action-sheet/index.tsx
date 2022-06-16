import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { ActionSheetProps } from '~/types/action-sheet';

import Button from '../button';
import Popup from '../popup';

const prefix = `${PREFIX}-action-sheet`;

const ActionSheet: React.FC<ActionSheetProps> = ({
  className,
  style,
  visible,
  actions = [],
  onCancel,
  onClose,
  closeOnClickAction = true,
  onClickOverlay,
  closeOnClickOverlay = true,
}) => {
  // 点击操作项
  const handleItemClick = (cb?: Function) => {
    cb?.();
    if (closeOnClickAction) {
      onClose?.();
    }
  };

  // 点击遮照层
  const handleOverlayClick = () => {
    onClickOverlay?.();
    if (closeOnClickOverlay) {
      onClose?.();
    }
  };

  return (
    <Popup
      className={classnames(prefix, className)}
      style={style}
      visible={visible}
      position="bottom"
      onClose={onClose}
      onClickOverlay={handleOverlayClick}
    >
      <View className={`${prefix}-content`}>
        {actions.map((item) => (
          <Button
            className={`${prefix}-content-item`}
            key={item.name}
            type="text"
            block
            onClick={() => handleItemClick(item.onClick)}
            disabled={!!item.disabled}
            danger={!!item.danger}
          >
            {item.name}
          </Button>
        ))}
        {onCancel ? (
          <Button
            className={classnames(
              `${prefix}-content-item`,
              `${prefix}-content-item-cancel`,
            )}
            type="text"
            block
            onClick={onCancel}
          >
            取消
          </Button>
        ) : null}
      </View>
    </Popup>
  );
};

export default ActionSheet;
