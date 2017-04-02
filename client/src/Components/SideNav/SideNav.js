import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ClickListener from '../ClickListener';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick = evt => {
    const sideNavEl = this.sideNavEl;
    if (!document.querySelector('.nav-trigger').contains(evt.target)) {
      if (
        !this.sideNavTitleEl.contains(evt.target) &&
        !this.sideNavContainerEl.contains(evt.target) &&
        evt.target.className !== 'side-nav-back'
      ) {
        this.props.closeNav();
      }
    }
  };

  generateLink = link => {
    const { progress } = this.props;
    const currentProgress = progress[link.url];
    const fullUrl = `/mahindra-finance/${link.url}`;

    return (
      <li key={link.url}>
        {currentProgress
          ? <svg
              className="svg--checkmark"
              width="12px"
              height="9px"
              viewBox="0 0 12 9"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>checkmark</title>
              <polygon
                id="Shape"
                points="4.1 6.1 1.4 3.4 0 4.9 4.1 9 11.7 1.4 10.3 0"
              />
            </svg>
          : <svg
              className="svg--not-done"
              width="12px"
              height="4px"
              viewBox="0 0 12 4"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Not Done</title>
              <path d="M0,0 L10,0" id="Line" />
            </svg>}
        <Link to={fullUrl}>{link.title}</Link>
      </li>
    );
  };

  contentPane = location => {
    const paneClass = classNames({
      'side-nav-list': true,
      'side-nav-list--nested': true,
      'side-nav-list--content--inactive': location !== 1
    });

    const section1 = [
      {
        title: 'Setting the scene',
        url: '01-1-setting-the-scene'
      },
      {
        title: 'Entry into the early market',
        url: '01-2-entry-into-rural-market'
      },
      {
        title: 'Rural market stategy',
        url: '01-4-operationalizing-a-rural-market-strategy'
      },
      {
        title: 'Growth Trajectory',
        url: '01-5-growth-trajectory'
      }
    ].map(this.generateLink);

    const section2 = [
      {
        title: 'Setting the scene',
        url: '02-1-entry-into-new-business-segments'
      },
      {
        title: 'Entry into the early market',
        url: '02-2-housing-finance'
      }
    ].map(this.generateLink);

    return (
      <ul className={paneClass}>
        <li><Link to="/mahindra-finance">Introduction</Link></li>
        <li>
          <span>Section 1</span>
          <ul>
            {section1}
          </ul>
        </li>
        <li><Link to="/mahindra-finance/review1">Review</Link></li>
        <li>
          <span>Section 2</span>
          <ul>
            {section2}
          </ul>
        </li>
        <li><Link to="/mahindra-finance/review2">Review</Link></li>
      </ul>
    );
  };

  notesPane = () => {};

  accountPane = () => {};

  tocPane = location => {
    const tocClass = classNames({
      'side-nav-list': true,
      'side-nav-list--toc--inactive': location !== 0
    });

    return (
      <ul className={tocClass}>
        <li onClick={evt => this.props.changeLocation(1)}>
          <span>Contents</span>
        </li>
        <li onClick={evt => this.props.changeLocation('notes', evt)}>
          <span>Notes</span>
        </li>
        <li onClick={evt => this.props.changeLocation('account', evt)}>
          <span>Account</span>
        </li>
      </ul>
    );
  };

  getTitleContent = location => {
    const enumLocation = {
      1: 'Content',
      2: 'Notes',
      3: 'Account'
    };

    return location === 0
      ? <div className="side-nav-title-container">
          <span className="svg-container">
            <svg
              onClick={this.props.closeNav}
              className="side-nav-logo"
              width="16px"
              height="13px"
              viewBox="0 0 16 13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <polygon points="0 3 12 3 12 0 0 0" />
              <polygon points="0 8 16 8 16 5 0 5" />
              <polygon points="0 13 16 13 16 10 0 10" />
            </svg>
          </span>
        </div>
      : <div
          className="side-nav-title-container"
          onClick={() => this.props.changeLocation(0)}
        >
          <img className="side-nav-back" src="/images/chevron--left.png" />
          <span className="side-nav-back">{enumLocation[location]}</span>
        </div>;
  };

  render() {
    const sideNavClass = classNames({
      'side-nav': true,
      'side-nav--active': this.props.open
    });

    const { location } = this.props;

    const tocPane = this.tocPane(location);
    const contentPane = this.contentPane(location);
    const titleContent = this.getTitleContent(location);

    return (
      <div
        ref={sideNavEl => this.sideNavEl = sideNavEl}
        className={sideNavClass}
      >
        <nav
          ref={sideNavContainerEl =>
            this.sideNavContainerEl = sideNavContainerEl}
          className="side-nav-container"
        >
          <div
            ref={sideNavTitleEl => this.sideNavTitleEl = sideNavTitleEl}
            className="side-nav-title"
          >
            {titleContent}
          </div>
          <ul className="side-nav-content">
            {tocPane}
            {contentPane}
          </ul>
        </nav>

      </div>
    );
  }
}

export default SideNav;
