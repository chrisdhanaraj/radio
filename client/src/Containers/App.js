import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Introduction from '../Pages/Introduction';
import Header from '../Components/Header';

import '../Components/Globals/reset.scss';
import '../Components/Globals/typography.scss';
import '../Components/Globals/layout.scss';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/introduction" component={Introduction} />
    </div>
  </Router>
);

export default App;
