import React from 'react';
import classNames from 'classnames';
import Show from '../components/Show';

const Showlist = props => {
  const rootClass = classNames({
    showlist: true,
    'showlist-active': props.active,
  });

  return (
    <div className={rootClass}>
      <h1>Shows</h1>
      <div className="shows">
        <Show />
        <Show />
        <Show />
        <Show />
        <Show />
        <Show />
      </div>
    </div>
  );
};

export default Showlist;
