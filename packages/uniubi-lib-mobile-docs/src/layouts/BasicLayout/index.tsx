import ProLayout, {
  BasicLayoutProps as AntdBasicLayoutProps,
  MenuDataItem,
} from '@ant-design/pro-layout';
import { Route } from '@ant-design/pro-layout/lib/typings';
import classnames from 'classnames';
import { FC } from 'react';
import { history, Link } from 'umi';

import pkg from '../../../package.json';
import PageContainer from './PageContainer';

import type { MenuTheme } from 'antd/lib/menu/MenuContext';

import './index.less';

export type BasicLayoutProps = AntdBasicLayoutProps & Route;

const BasicLayout: FC<BasicLayoutProps> = ({
  children,
  className,
  ...restProps
}) => {
  const MODE: MenuTheme = 'light';

  // 带子菜单的一级导航
  const renderSubMenuItem = (itemProps: MenuDataItem): React.ReactNode => {
    return <span>{itemProps.name}</span>;
  };

  // 不带子菜单的导航
  const renderMenuItem = (itemProps: MenuDataItem): React.ReactNode => {
    return itemProps.isUrl || !itemProps.path ? (
      <span>{itemProps.name}</span>
    ) : (
      <Link to={itemProps.path}>{itemProps.name}</Link>
    );
  };

  return (
    <ProLayout
      className={classnames(
        'g-basic-layout',
        `g-basic-layout-${MODE}`,
        className,
      )}
      logo="https://fe-cloud.uni-ubi.com/image/1625038486292-logo-r.png?x-oss-process=img/q/80"
      title={`Taro 组件库 ${pkg.version}`}
      layout="mix"
      headerTheme={MODE}
      navTheme={MODE}
      siderWidth={240}
      headerHeight={56}
      onMenuHeaderClick={() => {
        history.push('/');
      }}
      fixedHeader
      fixSiderbar
      disableMobile
      subMenuItemRender={renderSubMenuItem}
      menuItemRender={renderMenuItem}
      {...restProps}
    >
      <PageContainer>{children}</PageContainer>
    </ProLayout>
  );
};

export default BasicLayout;
