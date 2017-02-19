import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Introduction from '../Pages/Introduction';

const App = () => {
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/introduction" component={Introduction} />
    </div>
  </Router>;
};

export default App;
