import { Layout } from 'antd';
import classnames from 'classnames';
import React from 'react';

import styles from './index.less';

interface ContentProps {
  className?: string;
  style?: React.CSSProperties;
}

const Content: React.FC<ContentProps> = ({ children, className, style }) => {
  return (
    <Layout.Content
      className={classnames(styles.content, className)}
      style={style}
    >
      {children}
    </Layout.Content>
  );
};

export default Content;
