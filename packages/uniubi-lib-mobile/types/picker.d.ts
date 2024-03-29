import type { PickerViewProps } from '@tarojs/components';
import type { CSSProperties, ReactNode } from 'react';

export type ValueType = string | number;

export interface Option<T extends ValueType> {
  label: string;
  value: T;
}

export interface PickerProps<T extends ValueType> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  visible?: boolean;
  title?: ReactNode;
  options: Array<Array<Option<T>>>;
  defaultValue?: T[];
  value?: T[];
  indicatorClass?: PickerViewProps['indicatorClass'];
  indicatorStyle?: PickerViewProps['indicatorStyle'];
  maskClass?: PickerViewProps['maskClass'];
  maskStyle?: PickerViewProps['maskStyle'];
  immediateChange?: PickerViewProps['immediateChange'];
  onChange?: (value: T[]) => void;
  onOk?: (value: T[]) => void;
  onCancel?: () => void;
  onPickStart?: PickerViewProps['onPickStart'];
  onPickEnd?: PickerViewProps['onPickEnd'];
}

declare const Picker: <T extends ValueType>(
  props: PickerProps<T>,
) => JSX.Element;

export default Picker;
