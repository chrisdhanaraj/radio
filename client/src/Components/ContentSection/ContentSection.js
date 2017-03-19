import React, { Component } from 'react';

class ContentSection extends Component {
  highlightText = evt => {};

  componentDidMount() {
    window.addEventListener('mouseup', evt => {
      console.log(window.text);
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ContentSection;
