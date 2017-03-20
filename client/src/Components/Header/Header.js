import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  console.log(props);

  return (
    <header className="header">
      <ul className="header-nav">
        <li>
          <Link to="/introduction" className="header-nav__link">
            <img src="/images/eidos-logos.png" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
