import type { ButtonProps } from './button';
import type { CSSProperties, FC, ReactNode } from 'react';

export interface SearchBarProps {
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  placeholder?: string;
  circle?: boolean;
  showCancelButton?: boolean;
  clearOnCancel?: boolean;
  duration?: false | number;
  value?: string;
  onChange?: (value?: string) => void;
  onCancel?: ButtonProps['onClick'];
}

declare const SearchBar: FC<SearchBarProps>;

export default SearchBar;
