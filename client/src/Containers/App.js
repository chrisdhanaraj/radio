import React from 'react';
import { css } from 'glamor';
import 'glamor/reset';
import Main from '../pages/Main';
import Register from '../pages/Register';
import Dashboard from './Dashboard';
import Login from '../pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

css.fontFace({
  fontFamily: 'IBM Eliot',
  fontStyle: 'normal',
  fontWeight: 400,
  src: "url('/fonts/IBMEliotSans-Regular-v01.woff2'), url('/fonts/IBMEliotSans-Regular-v01.woff')",
});

const boldFace = css.fontFace({
  fontFamily: 'IBM Eliot',
  fontStyle: 'normal',
  fontWeight: 700,
  src: "url('/fonts/IBMEliotSans-Bold-v01.woff2'), url('/fonts/IBMEliotSans-Bold-v01.woff')",
});

css.global('html, body', {
  fontFamily: 'IBM Eliot',
  boxSizing: 'border-box',
  backgroundColor: '#000',
  color: '#fff',
});
css.global('*, *:before, *:after', { boxSizing: 'inherit' });
css.global('p', { margin: 0 });
css.global('img', { maxWidth: '100%' });

const App = props => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
