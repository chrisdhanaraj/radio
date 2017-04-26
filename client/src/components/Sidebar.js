import React from 'react';

const Sidebar = props => {
  console.log(props);

  const imgStyle = {
    background: `url(${props.gif}) no-repeat center center`,
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    alignSelf: 'center',
    margin: '0 auto',
  };

  return (
    // <Calendar active={showCalendar} />
    (
      <div>
        <div className="show-gif">
          <div className="rotating" style={imgStyle} />
        </div>
        <div className="current-track">
          <strong className="current-track__song">{props.milena}</strong>
          <p className="current-track__artist">Queen</p>
        </div>
        <div className="player-controls">
          <svg
            className="player-controls__play"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            data-icon="media-play"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              d="M.25.156c-.141 0-.25.119-.25.344v15c0 .3.206.412.406.313l15.188-7.625c.2-.1.206-.275-.094-.375l-15.094-7.625c-.05-.025-.109-.031-.156-.031z"
              transform="translate(8 8)"
            />
          </svg>

          <svg
            className="player-controls__volume"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            data-icon="volume-high"
            width="16"
            height="16"
            data-container-transform="scale(1 1 ) translate(0 1 )"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.344.656l-.688.688c1.406 1.406 2.344 3.501 2.344 5.656s-.938 4.251-2.344 5.656l.688.688c1.594-1.594 2.656-3.899 2.656-6.344 0-2.445-1.062-4.749-2.656-6.344zm-7.344.344l-3 3h-3v6h3l3 3h1v-12h-1zm5.25 1.75l-.719.719c.906.906 1.469 2.165 1.469 3.531 0 1.367-.563 2.626-1.469 3.531l.719.719c1.094-1.094 1.75-2.617 1.75-4.25s-.656-3.156-1.75-4.25zm-2.063 2.125l-.781.625c.354.443.594.943.594 1.5s-.239 1.057-.594 1.5l.781.625c.446-.557.813-1.282.813-2.125s-.367-1.568-.813-2.125z"
              transform="translate(0 1)"
            />
          </svg>
        </div>

        <div className="current-show">
          <h2 className="current-show__title">Toolsday</h2>
          <p className="current-show__description">
            Toolsday is a 20-ish-minute podcast about the latest in tech tools, tips,
            and tricks on Tuesdays at 2! (Our alliteration game is so strong). The podcast
            is brought to you by Chris Dhanaraj and Una Kravets.
          </p>
        </div>

        <div className="galaxy-map">
          <div className="nav-point">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="32"
              height="32"
              data-icon="calendar"
              data-container-transform="translate(1)"
              viewBox="0 0 32 32"
            >
              <path
                d="M.5 0c-.276 0-.5.224-.5.5v5.5h30v-5.5c0-.276-.224-.5-.5-.5h-29zm-.5 7v24.5c0 .276.224.5.5.5h29c.276 0 .5-.224.5-.5v-24.5h-30zm8 3h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm-20 5h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm-20 5h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4zm-20 5h4v4h-4v-4zm5 0h4v4h-4v-4zm5 0h4v4h-4v-4z"
                transform="translate(1)"
              />
            </svg>
            <p onClick={() => props.toggleCalendar()}>Schedule</p>
          </div>
          <div className="nav-point">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="32"
              height="32"
              data-icon="headphones"
              data-container-transform="translate(1)"
              viewBox="0 0 32 32"
            >
              <path
                d="M14.5 0c-7.991 0-14.5 6.509-14.5 14.5a1.5 1.5 0 0 0 1 1.438v.563c0 1.168.222 2.728.531 3.656.258.773.469 1.93.469 2.344v1.063c-1.194.692-2 1.958-2 3.438 0 1.863 1.276 3.399 3 3.844v.656c0 .276.224.5.5.5h2c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5 0-.686-.239-1.78-.531-2.656-.241-.722-.469-2.312-.469-3.344v-.563a1.5 1.5 0 0 0 1-1.438c0-6.369 5.131-11.5 11.5-11.5s11.5 5.131 11.5 11.5a1.5 1.5 0 0 0 1 1.438v.563c0 1.032-.228 2.622-.469 3.344-.292.877-.531 1.97-.531 2.656 0-.276-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h2c.276 0 .5-.224.5-.5v-.656c1.724-.445 3-1.981 3-3.844 0-1.479-.806-2.745-2-3.438v-1.063c0-.408.215-1.54.469-2.313v-.031c.309-.928.531-2.488.531-3.656v-.563a1.5 1.5 0 0 0 1-1.438c0-7.991-6.509-14.5-14.5-14.5z"
                transform="translate(1)"
              />
            </svg>
            <p onClick={() => props.toggleShows()}>Shows</p>
          </div>
          <p>Archives</p>
        </div>
      </div>
    )
  );
};

export default Sidebar;
