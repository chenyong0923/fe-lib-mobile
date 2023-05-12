import { Component } from 'react';

import '@uniubi/icons-taro/dist/styles/index.css';
import 'uniubi-lib-mobile/dist/style/index.less';
import '@/styles/index.less';

class App extends Component {
  // this.props.children 是将要会渲染的页面
  render() {
    return (this.props as any).children;
  }
}

export default App;
