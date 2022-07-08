import React from 'react';

import { IFormContext } from '~/types/form/context';

const defaultValue: IFormContext = {
  layout: 'horizontal',
  instance: undefined,
};

const FormContext = React.createContext(defaultValue);

export default FormContext;
