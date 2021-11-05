import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import BasicLayout from '@/layouts/BasicLayout';
import Docs from '@/pages/docs/index';
import Index from '@/pages/index/index';

import 'antd/dist/antd.css';
import 'highlight.js/styles/atom-one-dark.css';
import './styles/markdown.less';

const App = () => {
  return (
    <BasicLayout>
      <Switch>
        <Route path="/docs" component={Docs} />
        <Route path="/" exact component={Index} />
      </Switch>
    </BasicLayout>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('container'),
);
