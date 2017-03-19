import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Introduction from '../Pages/Introduction';
import History from '../Pages/History';
import Entry from '../Pages/Entry';
import Operationalizing from '../Pages/Operationalizing';
import Growth from '../Pages/Growth';
import DecisionOne from '../Pages/DecisionOne';
import EntryNewBusiness from '../Pages/EntryNewBusiness';
import Insurance from '../Pages/Insurance';
import Housing from '../Pages/Housing';
import DecisionTwo from '../Pages/DecisionTwo';

class App extends Component {
  render() {
    const location = window.location.pathname;
    const isHome = location === '/';

    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Introduction} />
          <Route path="/login" component={Login} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/history" component={History} />
          <Route path="/entry-rural-market" component={Entry} />
          <Route path="/operationalizing" component={Operationalizing} />
          <Route path="/growth" component={Growth} />
          <Route path="/decision-one" component={DecisionOne} />
          <Route path="/entry-new-business" component={EntryNewBusiness} />
          <Route path="/Insurance" component={Insurance} />
          <Route path="/housing" component={Housing} />
          <Route path="/decision-two" component={DecisionTwo} />
        </div>
      </Router>
    );
  }
}

export default App;
