import { Button } from '@tarojs/components';
import classnames from 'classnames';
import React from 'react';

import { UButtonProps } from '../../../types/button';

const UButton: React.FC<UButtonProps> = ({ className, ...rest }) => {
  return (
    <Button className={classnames('ulm-button', className)} {...rest}>
      Button
    </Button>
  );
};

export default UButton;
