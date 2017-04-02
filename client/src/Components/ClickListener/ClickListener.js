/* global document */

import React, { PropTypes } from 'react';

class ClickListener extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClickOutside: PropTypes.func.isRequired
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }
  /* istanbul ignore next */
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = evt => {
    console.log(this.element, evt.target);
    console.log(this.element.contains(evt.target));
    if (!this.element.contains(evt.target)) {
      console.log('hi');
      this.props.onClickOutside(evt);
    }
  };

  render() {
    return (
      <div
        ref={el => {
          this.element = el;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ClickListener;
