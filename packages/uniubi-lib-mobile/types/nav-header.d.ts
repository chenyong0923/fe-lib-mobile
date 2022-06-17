import React, { FC } from 'react';

/**
 * nav-header组件props
 */

export interface NavHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  /**
   * 标题
   */
  title?: string | React.ReactNode;
  /**
   * 标题位置
   */
  titlePosition?: 'center' | 'left';
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 图标及字体颜色
   */
  fontColor?: string;
  /**
   * 重写返回方法
   */
  onBack?: () => void;
  /**
   * 返回图标
   */
  backIcon?: React.ReactNode;
  /**
   * 返回tip
   */
  backTip?: string;
  /**
   * 是否隐藏back图标和tip
   */
  hiddenBack?: boolean;
  /**
   * 是否有下划线
   */
  isBottomBorder?: boolean;
  /**
   * 在唯一页面时返回首页地址，为空时返回按钮不显示
   */
  homePath?: string;
  /**
   * 顶部statusBar高度——一般在layout传入
   */
  statusBarHeight?: number;
}

declare const NavHeader: FC<NavHeaderProps>;

export default NavHeader;
