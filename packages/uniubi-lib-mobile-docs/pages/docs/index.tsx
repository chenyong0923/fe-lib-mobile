import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { navConfig, NavType } from '@/components/Sider';

import styles from './index.less';

const Docs: React.FC = () => {
  // 是否展示 demo
  const [hasDemo, setHasDemo] = useState<boolean>(false);
  // 路由信息
  const { pathname } = useLocation();

  useEffect(() => {
    setDemoState(pathname);
  }, [pathname]);

  // 导航数据
  const data: NavType[] = navConfig.components;

  // 匹配路由
  const matchNav = (name: string) => {
    const group = data
      .map((item) => item.items)
      .reduce((prev, curr) => prev?.concat(curr || []), []);
    return (group || []).find((item) => item.name.toLowerCase() === name);
  };

  // 通过路由信息设置当前页面 demo 展示状态
  const setDemoState = (path: string) => {
    const componentName = path.split('/')[2];
    const comp = matchNav(componentName);
    setHasDemo(!!comp?.demo);
  };

  return (
    <div className={styles.wrapper}>
      <Switch>
        {data.map((item) => {
          if (item.items) {
            return item.items.map((menu) => (
              <Route
                path={`/docs/${menu.name.toLowerCase()}`}
                component={require(`../../view/${menu.name}`).default}
              />
            ));
          }
          return <></>;
        })}
        <Redirect path="/docs/" to={{ pathname: '/docs/introduction' }} />
      </Switch>
      {hasDemo && <div>111</div>}
    </div>
  );
};

export default Docs;
