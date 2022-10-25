import { View } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { PREFIX } from '@/constants';
import { ModalProps } from '~/types/modal';

import Button from '../button';
import Popup from '../popup';

const prefix = `${PREFIX}-modal`;

const Modal: React.FC<ModalProps> = (props) => {
  const {
    className,
    style,
    children,
    visible,
    title,
    okText = '确定',
    onOk,
    cancelText = '取消',
    onCancel,
    onClickOverlay,
    closeOnClickOverlay = true,
    roundButton = false,
    footer,
  } = props;

  const handleOk = () => {
    onOk?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  // 点击遮照层
  const handleOverlayClick = () => {
    onClickOverlay?.();
    if (closeOnClickOverlay) {
      handleCancel?.();
    }
  };

  // 渲染 footer
  const renderFooter = () => {
    // 如果 props 中存在 footer，不管传什么都渲染
    if ('footer' in props) {
      return footer;
    }
    return (
      <View
        className={classnames(`${prefix}-footer`, {
          [`${prefix}-footer-round`]: roundButton,
        })}
      >
        <View
          className={classnames(
            `${prefix}-footer-btn`,
            `${prefix}-footer-btn-cancel`,
          )}
        >
          <Button
            block={!roundButton}
            onClick={handleCancel}
            round={roundButton}
          >
            {cancelText}
          </Button>
        </View>
        <View
          className={classnames(
            `${prefix}-footer-btn`,
            `${prefix}-footer-btn-ok`,
          )}
        >
          <Button
            type={roundButton ? 'primary' : 'link'}
            block={!roundButton}
            onClick={handleOk}
            round={roundButton}
          >
            {okText}
          </Button>
        </View>
      </View>
    );
  };

  return (
    <Popup
      className={classnames(prefix, className)}
      style={style}
      visible={visible}
      onClickOverlay={handleOverlayClick}
    >
      <View className={`${prefix}-body`}>
        <View className={`${prefix}-body-title`}>{title}</View>
        <View className={`${prefix}-body-content`}>{children}</View>
      </View>
      {renderFooter()}
    </Popup>
  );
};

export default Modal;
