import React, { Component } from 'react';
import classNames from 'classnames';

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      position: {},
      selectedText: ''
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleClick = evt => {
    const selObj = window.getSelection();
    const text = selObj.toString();
  };

  handleMouseUp = evt => {
    const selObj = window.getSelection();
    const text = selObj.toString();

    if (text !== '' && selObj !== undefined) {
      this.setState({
        visible: true,
        position: this.positionTooltip(evt, selObj),
        selectedText: text
      });
    }
  };

  positionTooltip = (evt, selObj) => {
    const range = selObj.getRangeAt(0);
    console.log(range.getBoundingClientRect().top);
    const topOffset = range.getBoundingClientRect().top - 5;
    const height = 81;

    return {
      top: topOffset - 30 + window.pageYOffset,
      left: evt.screenX
    };
  };

  render() {
    const tooltipClass = classNames({
      'tooltip-container': true,
      'tooltip-container--visible': this.state.visible
    });

    return (
      <div style={this.state.position} className={tooltipClass}>
        <div className="selected-tooltip">
          <div className="selected-tooltip-action">
            <img src="/images/bookmark.svg" />
          </div>
          <div className="selected-tooltip-action">
            <img src="/images/notes.svg" />
          </div>
          <div className="selected-tooltip-action">
            <img src="/images/quotes.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tooltip;
