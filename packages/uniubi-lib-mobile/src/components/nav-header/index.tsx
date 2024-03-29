import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { LeftOutlined } from '@uniubi/icons-taro';
import classnames from 'classnames';
import React, { useMemo } from 'react';

import { PREFIX } from '@/constants';
import { getSystemInfoSync } from '@/utils/common';
import { NavHeaderProps } from '~/types/nav-header';

const prefix = `${PREFIX}-nav-header`;

const NavHeader: React.FC<NavHeaderProps> = (props) => {
  const {
    className,
    style = {},
    backgroundColor = '#ffffff',
    fontColor = '#000000',
    backIcon,
    backTip,
    hiddenBack,
    title,
    homePath,
    onBack,
    needBottomBorder = true,
    titlePosition = 'center',
  } = props;

  const navigateBack = () => {
    Taro.navigateBack({
      delta: 1,
      fail: () => {
        homePath &&
          Taro.switchTab({
            url: homePath,
            fail: () => {
              Taro.redirectTo({ url: homePath });
            },
          });
      },
    });
  };

  const { statusBarHeight } = useMemo(() => getSystemInfoSync(), []);

  return (
    <View
      className={classnames(prefix, className, {
        [`${prefix}-border`]: needBottomBorder,
      })}
      style={{
        backgroundColor,
        paddingTop: `${statusBarHeight}px`,
        ...style,
      }}
    >
      <View className={`${prefix}-content`}>
        {!hiddenBack && (
          <View
            className={`${prefix}-content-back`}
            onClick={onBack || navigateBack}
          >
            {backIcon || (
              <LeftOutlined
                className={`${prefix}-content-back-icon`}
                style={{ color: fontColor }}
              />
            )}
            {backTip && (
              <Text
                className={`${prefix}-content-back-tip`}
                style={{ color: fontColor }}
              >
                {backTip}
              </Text>
            )}
          </View>
        )}
        <View
          className={classnames(
            `${prefix}-content-title`,
            `${prefix}-content-title-${titlePosition}`,
          )}
          style={{ color: fontColor }}
        >
          {typeof title === 'string' ? (
            <Text className={`${prefix}-content-title-text`}>{title}</Text>
          ) : (
            title
          )}
        </View>
      </View>
    </View>
  );
};

export default NavHeader;
