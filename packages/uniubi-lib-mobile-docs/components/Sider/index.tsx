import { Layout, Menu } from 'antd';
import classnames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './index.less';
import navConfig from './nav.config.yml';

export { navConfig };

export interface NavType {
  title: string;
  name: string;
  items?: NavType[];
}

const { SubMenu } = Menu;

interface SiderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Sider: React.FC<SiderProps> = ({ className, style }) => {
  // 菜单渲染数据
  const data: NavType[] = navConfig.components;
  // 路由信息
  const { pathname } = useLocation();

  return (
    <Layout.Sider
      width={240}
      className={classnames(styles.sider, className)}
      style={style}
    >
      <Menu
        mode="inline"
        selectedKeys={[pathname]}
        defaultOpenKeys={data.map((item) => item.title)}
      >
        {data.map((item) => (
          <SubMenu key={item.title} title={item.title}>
            {item.items &&
              item.items?.map((menu) => {
                const url = `/${item.name.toLowerCase()}/${menu.name.toLowerCase()}`;
                return (
                  <Menu.Item key={url}>
                    <Link to={{ pathname: url }}>{menu.title}</Link>
                  </Menu.Item>
                );
              })}
          </SubMenu>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
