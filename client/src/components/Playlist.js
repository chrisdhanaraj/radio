import React from 'react';

const Playlist = props => {
  return (
    <section className="playlist-container">
      <div className="playlist">
        <small className="playlist-label">Now Playing</small>
        <div className="track track--current">
          <span className="track__title">We Are the Champions</span>
          <span className="track__artist">Queen</span>
        </div>
      </div>

      <ul className="playlist">
        <li className="playlist__item track-header">
          <small className="playlist-label">Previous</small>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Forbidden Friendship</span>
          <span className="track__artist">John Powell</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Me, Myself, and I</span>
          <span className="track__artist">G-Eazy</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Radioactive</span>
          <span className="track__artist">Imagine Dragons</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Warriors</span>
          <span className="track__artist">Imagine Dragons</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">The Dog Days are Coming</span>
          <span className="track__artist">G-Eazy</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">We Are the Champions</span>
          <span className="track__artist">Queen</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Forbidden Friendship</span>
          <span className="track__artist">John Powell</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Me, Myself, and I</span>
          <span className="track__artist">G-Eazy</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Radioactive</span>
          <span className="track__artist">Imagine Dragons</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">Warriors</span>
          <span className="track__artist">Imagine Dragons</span>
        </li>
        <li className="playlist__item track">
          <span className="track__title">The Dog Days are Coming</span>
          <span className="track__artist">G-Eazy</span>
        </li>
      </ul>
    </section>
  );
};

export default Playlist;
