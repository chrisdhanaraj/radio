import React from 'react';

const MainHeading = props => {
  return (
    <div className="main-heading">
      <p className="main-heading__sub-title sub-title">{props.subtitle}</p>
      <h1 className="main-heading__title">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default MainHeading;
