import React, { Component } from 'react';
import classNames from 'classnames';

class Page extends Component {
  render() {
    const { className, children } = this.props;

    const classes = classNames({
      page: true,
      [className]: className
    });

    return (
      <section className={classes}>
        {children}
      </section>
    );
  }
}

export default Page;
