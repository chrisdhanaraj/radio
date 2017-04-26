import React from 'react';
import Main from './Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = props => {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </div>
  );
};

export default App;
