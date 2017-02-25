import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <ul className="header-nav">
        <li>
          <Link to="/" className="header__logo header-nav__link">eidos</Link>
        </li>
        <li>
          <Link to="/introduction" className="header-nav__link">
            Mahindra Finance
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
