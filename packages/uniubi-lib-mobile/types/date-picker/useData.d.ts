import type { PickerType } from './common';
import type { Dayjs } from 'dayjs';

export interface UseDataProps {
  type: PickerType;
  range: [Dayjs, Dayjs];
  value?: Dayjs;
}
