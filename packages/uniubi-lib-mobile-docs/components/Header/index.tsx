import { Image, Layout, Typography } from 'antd';
import classnames from 'classnames';
import React from 'react';

import styles from './index.less';

const { Link } = Typography;

interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ className, style }) => {
  return (
    <Layout.Header
      className={classnames(styles.header, className)}
      style={style}
    >
      <Image
        src="https://fe-cloud.uni-ubi.com/image/1625038486287-logo-lw.png?x-oss-process=img/q/80"
        alt="logo"
        preview={false}
        width={96}
      />
      <Link
        className={styles.link}
        href="http://gitlab.uniubi.local/fe-team/common/uniubi-lib-mobile"
        target="_blank"
      >
        gitlab 仓库
      </Link>
    </Layout.Header>
  );
};

export default Header;
