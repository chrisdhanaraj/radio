import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

// Wrapper
import PageWrapper from './PageWrapper';

// Pages
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Introduction from '../Pages/Introduction';
import History from '../Pages/History';
import Entry from '../Pages/Entry';
import Operationalizing from '../Pages/Operationalizing';
import Growth from '../Pages/Growth';
import DecisionOne from '../Pages/DecisionOne';
import Insurance from '../Pages/Insurance';
import Housing from '../Pages/Housing';
import DecisionTwo from '../Pages/DecisionTwo';

// Utility
import ScrollToTop from '../utility/ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);
    window.localStorage.removeItem('nav');
  }

  render() {
    const location = window.location.pathname;
    const isHome = location === '/';

    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Redirect exact path="/" to="/mahindra-finance" />
            <Route path="/login" component={PageWrapper(Login)} />
            <Route
              exact
              path="/mahindra-finance"
              component={PageWrapper(Introduction)}
            />
            <Route
              path="/mahindra-finance/01-1-setting-the-scene"
              component={PageWrapper(History)}
            />
            <Route
              path="/mahindra-finance/01-2-entry-into-rural-market"
              component={PageWrapper(Entry)}
            />
            <Route
              path="/mahindra-finance/01-4-operationalizing-a-rural-market-strategy"
              component={PageWrapper(Operationalizing)}
            />
            <Route
              path="/mahindra-finance/01-5-growth-trajectory"
              component={PageWrapper(Growth)}
            />
            <Route
              path="/mahindra-finance/review1"
              component={PageWrapper(DecisionOne)}
            />
            <Route
              path="/mahindra-finance/02-1-entry-into-new-business-segments"
              component={PageWrapper(Insurance)}
            />
            <Route
              path="/mahindra-finance/02-2-housing-finance"
              component={PageWrapper(Housing)}
            />
            <Route
              path="/mahindra-finance/review2"
              component={PageWrapper(DecisionTwo)}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
