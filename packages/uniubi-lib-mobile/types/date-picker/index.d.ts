import Range from './range';

import type { PickerProps } from '../picker';
import type { PickerType } from './common';
import type { Dayjs } from 'dayjs';

export interface DatePickerProps
  extends Omit<
    PickerProps<number>,
    'options' | 'title' | 'value' | 'onChange' | 'onOk'
  > {
  type?: PickerType;
  range?: [Dayjs, Dayjs];
  value?: Dayjs;
  onChange?: (value: Dayjs) => void;
  onOk?: (value: Dayjs) => void;
}

declare const DatePicker: ((props: DatePickerProps) => JSX.Element) & {
  Range: typeof Range;
};

export default DatePicker;
