import type { PickerProps } from '../picker';
import type { PickerType } from './common';
import type { Dayjs } from 'dayjs';
import type { CSSProperties, FC } from 'react';

export type ValueType = [Dayjs, Dayjs];

export type ActiveKeyType = 'start' | 'end';

export interface DatePickerRangeProps
  extends Omit<PickerProps<number>, 'options' | 'value' | 'onChange' | 'onOk'> {
  className?: string;
  style?: CSSProperties;
  type?: PickerType;
  range?: [Dayjs, Dayjs];
  value?: ValueType;
  onChange?: (
    current: { activeKeyType: ActiveKeyType; value: Dayjs },
    range: ValueType,
  ) => void;
  onOk?: (value: ValueType) => void;
}

declare const DatePickerRange: FC<DatePickerRangeProps>;

export default DatePickerRange;
