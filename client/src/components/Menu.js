import React from 'react';

export default props => {
  return (
    <div className="menu-trigger">
      {props.children}

      <div>Menu</div>

      <div className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <p>Now</p>
          </li>
          <li className="menu__item">
            <p>Schedule</p>
          </li>
          <li className="menu__item">
            <p>Shows</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
