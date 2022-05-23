import React, { useMemo } from 'react';

const DemoContainer: React.FC = () => {
  const url = useMemo(() => {
    const prefix =
      process.env.NODE_ENV === 'production' ? '/h5' : 'http://localhost:10086';
    return `${prefix}/#/pages/components/button/index`;
  }, []);

  return (
    <iframe src={url} title="demo" frameBorder="0" width="100%" height="100%" />
  );
};

export default DemoContainer;
