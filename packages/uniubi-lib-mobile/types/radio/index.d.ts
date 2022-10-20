import Group from './group';

import type { CSSProperties, ReactNode } from 'react';

export type PlacementType = 'left' | 'right';
export type ModeType = 'outlined' | 'filled';

export interface RadioProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  value?: any;
  onChange?: (value?: any) => void;
  iconPlacement?: PlacementType;
  iconMode?: ModeType;
  desc?: ReactNode;
  onClick?: (e: ITouchEvent) => void;
}

declare const Radio: ((props: TabsProps) => JSX.Element) & {
  Group: typeof Group;
};

export default Radio;
