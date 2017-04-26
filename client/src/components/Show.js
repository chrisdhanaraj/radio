import React from 'react';
import classNames from 'classnames';

const Show = props => {
  const rootClass = classNames({
    show: true,
  });

  return (
    <div className={rootClass}>
      <div className="show-image" />
      <div className="show-desc">
        <h2 className="dj-name">DJ Darlene Conner</h2>
        <h3 className="time"> 2:00-4:00 PM CST </h3>
        <p className="info">
          {' '}
          Roseanne: [after yelling at Dan for being sexist, then arguing with Becky. Becky runs up the stairs, so Roseanne turns to Darlene] And you... What is it with you? All you do is just lay around that couch, staring at that stupid TV, one dumb rerun after another. Darlene: [to herself] And I do it as well as any man.
        </p>
      </div>
    </div>
  );
};

export default Show;
