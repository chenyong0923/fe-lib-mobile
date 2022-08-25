import Pane from './tabs-pane';

import type { CSSProperties, ReactNode } from 'react';

export interface TabsProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  layout?: 'horizontal' | 'vertical';
  activeKey?: string;
  onChange?: (activeKey: string) => void;
  line?: boolean;
}

declare const Tabs: ((props: TabsProps) => JSX.Element) & { Pane: typeof Pane };

export default Tabs;
