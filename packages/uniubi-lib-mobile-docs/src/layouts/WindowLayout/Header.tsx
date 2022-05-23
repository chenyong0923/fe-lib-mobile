import { Divider, Image } from 'antd';
import { history } from 'umi';

import User from '@/components/User';

import './index.less';

const Header = () => {
  return (
    <div className="g-window-layout-header">
      <div
        className="g-window-layout-header-logo"
        onClick={() => history.push('/')}
      >
        <Image
          src="https://uniubi-front.oss-cn-hangzhou.aliyuncs.com/public/logo_white.png"
          alt="logo"
          preview={false}
          width={36}
          height={24}
        />
        <Divider
          type="vertical"
          className="g-window-layout-header-logo-divider"
        />
        <span className="g-window-layout-header-logo-text">Uni-Ubi</span>
      </div>
      <div className="g-window-layout-header-actions">
        <User />
      </div>
    </div>
  );
};

export default Header;
