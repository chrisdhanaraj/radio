import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
  const {
    forwardText,
    forwardLink,
    forwardLabel,
    backwardText,
    backwardLink,
    backwardLabel
  } = props;

  let content = [];

  if (backwardText) {
    content.push(
      <div key={backwardText} className="footer-nav-backward">
        <i className="material-icons">chevron_left</i>
        <Link key={backwardText} to={backwardLink}>
          <span className="nav-label">{backwardLabel}</span>{backwardText}
        </Link>
      </div>
    );
  }

  if (forwardText) {
    content.push(
      <div key={forwardText} className="footer-nav-forward">
        <Link key={forwardText} to={forwardLink}>
          <span className="nav-label">{forwardLabel}</span>{forwardText}
        </Link>
        <i className="material-icons">chevron_right</i>
      </div>
    );
  }

  return (
    <footer className="footer-nav">
      {content}
    </footer>
  );
};

export default Footer;
