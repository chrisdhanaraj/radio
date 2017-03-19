import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  console.log(props);

  return (
    <header className="header">
      <img href="/images/eidos.jpg" />
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
