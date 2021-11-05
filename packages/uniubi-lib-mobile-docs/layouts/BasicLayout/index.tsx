import { Layout } from 'antd';
import React from 'react';

import Content from '@/components/Content';
import Header from '@/components/Header';
import Sider from '@/components/Sider';

import styles from './index.less';

const BasicLayout: React.FC = ({ children }) => {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header} />
      <Layout className={styles.body}>
        <Sider className={styles.sider} />
        <Layout className={styles.container}>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
