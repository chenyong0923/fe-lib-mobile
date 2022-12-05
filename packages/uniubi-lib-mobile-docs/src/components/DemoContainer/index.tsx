import React, { useMemo } from 'react';
import { useLocation } from 'umi';

const DemoContainer: React.FC = () => {
  const { pathname } = useLocation();

  const url = useMemo(() => {
    // 开发模式访问本地路径，构建后访问 dist/h5 目录
    const prefix =
      process.env.NODE_ENV === 'production' ? '/h5' : 'http://localhost:10086';

    // demo 路径
    const path = pathname === '/' ? '/index' : `/components${pathname}`;
    console.log('pathname', pathname, `${prefix}/#/pages${path}/index`);

    return `${prefix}/#/pages${path}/index`;
  }, [pathname]);

  return (
    <iframe src={url} title="demo" frameBorder="0" width="100%" height="100%" />
  );
};

export default DemoContainer;
