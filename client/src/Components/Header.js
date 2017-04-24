import React, { Component } from 'react';
import classNames from 'classnames';

export default class Header extends Component {
  handleAppMenu = () => {
    this.props.toggleAppMenu();
  };

  getAppSpace = () => {
    let content = '';
    console.log('header', this.props.grid, this.props.appNav);

    if (this.props.grid && this.props.appNav) {
      content = (
        <svg
          onClick={() => {
            this.props.toggleAppMenu();
          }}
          className="app-menu-trigger"
          width="20px"
          height="14px"
          viewBox="0 0 20 14"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
        >
          <rect id="Rectangle-7" x="0" y="0" width="20" height="2" />
          <rect id="Rectangle-7-Copy" x="0" y="6" width="20" height="2" />
          <rect id="Rectangle-7-Copy-2" x="0" y="12" width="20" height="2" />
        </svg>
      );
    } else if (this.props.grid && !this.props.appNav) {
      content = null;
    } else if (this.props.appNav && !this.props.grid) {
      content = (
        <svg
          onClick={() => {
            this.props.toggleGlobalMenu();
          }}
          className="app-menu-trigger"
          width="20px"
          height="14px"
          viewBox="0 0 20 14"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
        >
          <rect id="Rectangle-7" x="0" y="0" width="20" height="2" />
          <rect id="Rectangle-7-Copy" x="0" y="6" width="20" height="2" />
          <rect id="Rectangle-7-Copy-2" x="0" y="12" width="20" height="2" />
        </svg>
      );
    } else {
      content = null;
    }

    return content;
  };

  render() {
    const headerClass = classNames({
      'l0-header': true,
      [this.props.className]: this.props.className,
    });

    const style = {
      backgroundColor: this.props.bgColor,
    };

    const appSpaceTrigger = this.getAppSpace();

    return (
      <section className={headerClass} style={style}>
        <div className="app-space">
          {appSpaceTrigger}
          <div className="product-title">
            <img src={this.props.productLogo} />
            <h1>{this.props.productTitle}</h1>
          </div>
          {this.props.productNav
            ? <div className="product-nav">
                {this.props.productNav}
              </div>
            : null}
        </div>
        <div className="global-space">
          <svg
            className="global-space-icon"
            width="16px"
            height="16px"
            viewBox="0 0 25 25"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
          >
            <polygon
              id="Rectangle-path"
              points="16.03594 18.45458 18.44008 16.05044 24.02617 21.63653 21.62203 24.04067"
            />
            <circle id="Oval" cx="16" cy="16" r="1" />
            <path
              d="M8.5,2 C12.1,2 15,4.9 15,8.5 C15,12.1 12.1,15 8.5,15 C4.9,15 2,12.1 2,8.5 C2,4.9 4.9,2 8.5,2 L8.5,2 Z M8.5,0 C3.8,0 0,3.8 0,8.5 C0,13.2 3.8,17 8.5,17 C13.2,17 17,13.2 17,8.5 C17,3.8 13.2,0 8.5,0 L8.5,0 L8.5,0 Z"
              id="Shape"
            />
          </svg>
          {this.props.grid
            ? <svg
                className="global-space-icon"
                onClick={this.props.toggleGlobalMenu}
                width="16px"
                height="16px"
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Artboard</title>
                <desc>Created with Sketch.</desc>
                <defs />
                <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                  <g id="Artboard">
                    <rect id="Rectangle-3" x="0" y="0" width="4" height="4" />
                    <rect id="Rectangle-3" x="0" y="6" width="4" height="4" />
                    <rect id="Rectangle-3" x="6" y="0" width="4" height="4" />
                    <rect id="Rectangle-3" x="6" y="6" width="4" height="4" />
                    <rect id="Rectangle-3" x="12" y="0" width="4" height="4" />
                    <rect id="Rectangle-3" x="12" y="6" width="4" height="4" />
                    <rect id="Rectangle-3" x="0" y="12" width="4" height="4" />
                    <rect id="Rectangle-3" x="6" y="12" width="4" height="4" />
                    <rect id="Rectangle-3" x="12" y="12" width="4" height="4" />
                  </g>
                </g>
              </svg>
            : null}

          <svg
            className="global-space-icon global-space-icon--avatar"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>avatar-1</title>
            <circle cx="12" cy="8.97" r="5" />
            <path
              d="M12,0A12,12,0,0,0,4.87,21.63l0.07,0.06a11.94,11.94,0,0,0,14,.09l0.23-.18A12,12,0,0,0,12,0Zm7,20.43a7.16,7.16,0,0,0-14,0A11,11,0,1,1,19,20.43Z"
              transform="translate(0 0)"
            />
          </svg>
        </div>
      </section>
    );
  }
}
