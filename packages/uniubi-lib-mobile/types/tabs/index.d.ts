import Pane from './tabs-pane';

import type { CSSProperties, ReactNode } from 'react';

export interface TabsProps<T extends string> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  layout?: 'horizontal' | 'vertical';
  activeKey?: T;
  onChange?: (activeKey: T) => void;
  line?: boolean;
  autoNavItemWidth?: boolean; // 是否自动计算导航栏选项宽度
}

declare const Tabs: ((props: TabsProps) => JSX.Element) & { Pane: typeof Pane };

export default Tabs;
