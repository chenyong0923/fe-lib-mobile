import React, { useMemo } from 'react';
import { useLocation } from 'umi';

import DemoContainer from '@/components/DemoContainer';

import styles from './index.less';

const WHITE_LIST = ['/'];

const PageContainer: React.FC = ({ children }) => {
  const { pathname } = useLocation();

  // 是否需要 demo 展示
  const needDemo = useMemo(() => {
    return !WHITE_LIST.includes(pathname);
  }, [pathname]);

  return (
    <div
      className={styles.container}
      style={{ paddingRight: needDemo ? 380 : 0 }}
    >
      <div className={styles.doc}>{children}</div>
      {needDemo && (
        <div className={styles.demo}>
          <DemoContainer />
        </div>
      )}
    </div>
  );
};

export default PageContainer;
