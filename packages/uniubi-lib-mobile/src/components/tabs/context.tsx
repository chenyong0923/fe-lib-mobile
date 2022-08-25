import React from 'react';

import { ITabsContext } from '~/types/tabs/context';

const defaultValue: ITabsContext = {
  activeKey: undefined,
};

const TabsContext = React.createContext(defaultValue);

export default TabsContext;
