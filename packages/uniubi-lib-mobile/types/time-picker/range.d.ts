import type { PickerProps } from '../picker';
import type { Dayjs } from 'dayjs';
import type { FC } from 'react';

export type ValueType = [Dayjs, Dayjs];

export type ActiveKeyType = 'start' | 'end';

export interface TimePickerRangeProps
  extends Omit<PickerProps<number>, 'options' | 'value' | 'onChange' | 'onOk'> {
  value?: ValueType;
  onChange?: (
    current: { activeKeyType: ActiveKeyType; value: Dayjs },
    range: ValueType,
  ) => void;
  onOk?: (value: ValueType) => void;
}

declare const TimePickerRange: FC<TimePickerRangeProps>;

export default TimePickerRange;
