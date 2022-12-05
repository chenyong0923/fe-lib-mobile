import { BaseProps, ValueType } from './common';
import Group from './group';

interface Option {
  label: string;
  value: ValueType;
}

export interface MultipleChoiceProps extends BaseProps {
  question?: string;
  options?: Option[];
  signs?: string[];
  value?: ValueType | ValueType[];
  onChange?: (value?: ValueType | ValueType[]) => void;
}

declare const MultipleChoice: ((
  props: MultipleChoicePropsProps,
) => JSX.Element) & {
  Group: typeof Group;
};

export default Radio;
