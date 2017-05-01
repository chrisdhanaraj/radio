import React from 'react';
import classNames from 'classnames';

const Slot = props => {
  const rootClass = classNames({
    slot: true,
    'slot-active': props.active,
  });

  return (
    <td className={rootClass}>
      <h6>DJ Darlene Conner</h6>
      <p>Milena Pribic</p>
  </td>
  );
};

export default Slot;
