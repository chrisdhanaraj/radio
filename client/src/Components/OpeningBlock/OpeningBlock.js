import React from 'react';

const OpeningBlock = props => {
  return (
    <div className="opening-block-container">
      <div className="opening-block-number">
        <span className="opening-block-number__page">
          {props.page ? props.page : ''}
        </span>
      </div>
      <h1 className="opening-block-title">{props.title}</h1>
    </div>
  );
};

export default OpeningBlock;
