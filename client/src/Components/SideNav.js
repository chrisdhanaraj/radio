import React, { Component } from 'react';
import classNames from 'classnames';

export default class SideNav extends Component {
  handleClick = evt => {
    if (evt.target === this.sidenav) {
      this.props.toggleMenu();
    }
  };

  render() {
    const { children, position, open } = this.props;

    const sideNavClasses = classNames({
      'side-nav': true,
      'side-nav--right': position === 'right',
      'side-nav--visible': open,
    });

    return (
      <aside
        ref={n => (this.sidenav = n)}
        className={sideNavClasses}
        onClick={this.handleClick}
      >
        <nav className="side-nav__container">
          {children}
        </nav>
      </aside>
    );
  }
}
