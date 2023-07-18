import type { PickerViewProps } from '@tarojs/components';

export type ValueType = string | number;

export interface Option<T extends ValueType> {
  label: string;
  value: T;
}

export interface PanelProps<T extends ValueType>
  extends Omit<PickerViewProps, 'value' | 'onChange'> {
  options: Array<Array<Option<T>>>;
  value?: number[];
  onChange?: (value: number[]) => void;
}
