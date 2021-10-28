import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './pages/index/index';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('container'),
);
