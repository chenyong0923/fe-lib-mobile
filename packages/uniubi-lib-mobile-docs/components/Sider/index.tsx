import { Layout, Menu } from 'antd';
import classnames from 'classnames';
import React from 'react';

import styles from './index.less';
import navConfig from './nav.config.yml';

interface NavType {
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

  return (
    <Layout.Sider
      width={240}
      className={classnames(styles.sider, className)}
      style={style}
    >
      <Menu mode="inline">
        {data.map((item) => (
          <SubMenu key={item.title} title={item.title}>
            {item.items &&
              item.items?.map((menu) => (
                <Menu.Item key={menu.title}>{menu.title}</Menu.Item>
              ))}
          </SubMenu>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
