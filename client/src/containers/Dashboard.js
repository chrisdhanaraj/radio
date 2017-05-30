import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import glamorous from 'glamorous';
import Live from '../pages/Live';
import Profile from '../pages/Profile';
import ManageShow from '../pages/ManageShow';
import { logout, isAuthenticated } from '../utility/AuthService';

const DashboardContainer = glamorous.div({
  minHeight: '100vh',
});

const NavList = glamorous.ul({
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  borderBottom: '1px solid #fff',
  flexDirection: 'column',
  '@media (min-width: 525px)': {
    flexDirection: 'row',
  },
});

const NavItem = glamorous.li(props => ({
  '@media (min-width: 525px)': {
    marginLeft: props.logout ? 'auto' : 'initial',
  },
  '& > .dashboard-nav__link': {
    display: ' block',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
    padding: '1rem 2rem',
    textTransform: 'uppercase',
  },
  '& > .dashboard-nav__link--active': {
    color: '#000',
    backgroundColor: '#fff',
  },
}));

export default class Dashboard extends Component {
  logout = () => {
    logout();
    this.props.history.push('/login');
  };

  componentWillMount() {
    const { history } = this.props;
    if (!isAuthenticated()) {
      history.push('/login');
    }
  }

  render() {
    return (
      <DashboardContainer>
        <nav className="dashboard-nav-container">
          <NavList>
            <NavItem>
              <NavLink
                exact
                className="dashboard-nav__link"
                activeClassName="dashboard-nav__link--active"
                to="/dashboard"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="dashboard-nav__link"
                activeClassName="dashboard-nav__link--active"
                to="/dashboard/live"
              >
                Go Live
              </NavLink>
            </NavItem>
            <NavItem logout>
              <a
                className="dashboard-nav__link"
                onClick={evt => this.logout(evt)}
              >
                Logout
              </a>
            </NavItem>
          </NavList>
        </nav>
        <div className="dashboard__content">
          <Switch>
            <Route exact from="/dashboard" component={ManageShow} />
            <Route path="/dashboard/profile" component={Profile} />
            <Route path="/dashboard/live" component={Live} />
          </Switch>
        </div>
      </DashboardContainer>
    );
  }
}
