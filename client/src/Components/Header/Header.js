import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNav: false,
      location: 'home'
    };
  }

  render() {
    return (
      <header key="header" className="header">
        <ul className="header-nav">
          <li>
            <Link to="/mahindra-finance" className="header-nav__link">
              <img src="/images/eidos-logos.png" />
            </Link>
          </li>
          <li className="nav-trigger" onClick={this.props.openNav}>
            <svg
              className="nav-trigger__logo"
              width="16px"
              height="13px"
              viewBox="0 0 16 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <polygon points="0 3 12 3 12 0 0 0" />
              <polygon points="0 8 16 8 16 5 0 5" />
              <polygon points="0 13 16 13 16 10 0 10" />
            </svg>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
