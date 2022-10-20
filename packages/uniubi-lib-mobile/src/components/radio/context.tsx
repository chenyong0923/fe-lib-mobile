import React from 'react';

import { IRadioContext } from '~/types/radio/context';

const defaultValue: IRadioContext = {
  activeValue: undefined,
};

const RadioContext = React.createContext(defaultValue);

export default RadioContext;
