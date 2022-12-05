import type { CSSProperties, ReactNode } from 'react';

export type ValueType = string | number;

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  multiple?: boolean;
  modeTag?: boolean | ReactNode;
}
