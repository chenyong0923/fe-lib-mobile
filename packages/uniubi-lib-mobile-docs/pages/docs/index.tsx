import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { navConfig, NavType } from '@/components/Sider';

const Docs: React.FC = () => {
  const data: NavType[] = navConfig.components;

  return (
    <div>
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
    </div>
  );
};

export default Docs;
