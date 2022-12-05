import type { BaseProps, ValueType } from './common';
import type { FC } from 'react';

export interface MultipleChoiceGroupProps extends BaseProps {
  children?: ReactNode;
  value?: Array<ValueType | ValueType[]>;
  onChange?: (value?: Array<ValueType | ValueType[]>) => void;
}

declare const MultipleChoiceGroup: FC<MultipleChoiceGroupProps>;

export default MultipleChoiceGroup;
