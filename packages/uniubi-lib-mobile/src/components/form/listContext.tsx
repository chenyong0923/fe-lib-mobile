import React from 'react';

import type { IFormListContext } from '~/types/form/context';

const defaultValue: IFormListContext = {
  namePath: undefined,
};

const FormListContext = React.createContext(defaultValue);

export default FormListContext;
