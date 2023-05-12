import type { CSSProperties, FC, ReactNode } from 'react';

export interface PaneProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  tabKey: string;
  tab: ReactNode;
}

declare const Pane: FC<PaneProps>;

export default Pane;
