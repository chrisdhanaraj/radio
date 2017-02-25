import React, { Component } from 'react';

class ContentSection extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ContentSection;
