import Range from './range';

import type { PickerProps } from '../picker';
import type { Dayjs } from 'dayjs';

export interface TimePickerProps
  extends Omit<
    PickerProps<number>,
    'options' | 'title' | 'value' | 'onChange' | 'onOk'
  > {
  value?: Dayjs;
  onChange?: (value: Dayjs) => void;
  onOk?: (value: Dayjs) => void;
}

declare const TimePicker: ((props: TimePickerProps) => JSX.Element) & {
  Range: typeof Range;
};

export default TimePicker;
