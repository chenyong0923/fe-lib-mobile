import React from 'react';

import type { IFormContext } from '~/types/form/context';

const defaultValue: IFormContext = {
  layout: 'horizontal',
  instance: undefined,
};

const FormContext = React.createContext(defaultValue);

export default FormContext;
