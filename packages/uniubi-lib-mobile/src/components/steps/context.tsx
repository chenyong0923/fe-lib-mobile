import React from 'react';

import { IStepsContext } from '~/types/steps/context';

const defaultValue: IStepsContext = {
  activeValue: 1,
};

const StepsContext = React.createContext(defaultValue);

export default StepsContext;
