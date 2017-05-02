import React from 'react';
import classNames from 'classnames';

const Slot = props => {
  const { title, dj } = props;

  const rootClass = classNames({
    slot: true,
  });

  return (
    <td className={rootClass}>
      <h6>{title}</h6>
      <p>{dj}</p>
  </td>
  );
};

Slot.defaultProps = {
  title: 'Some title',
  dj: 'some author'
}

export default Slot;
