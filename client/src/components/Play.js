import React, { Component, PropTypes } from 'react';

export default class Play extends Component {
  static defaultProps = {
    autoplay: true,
    muted: true,
  };

  static propTypes = {
    autoplay: PropTypes.bool,
    muted: PropTypes.bool,
  };

  state = {
    muted: this.props.muted,
  };

  componentDidMount() {
    this.audio.addEventListener('canplay', () => {
      if (this.props.autoplay) {
        this.audio.play();
        this.setState({
          muted: false,
        });
      }
    });
  }

  togglePlay = () => {
    this.audio.muted = !this.audio.muted;
    this.setState({
      muted: this.audio.muted,
    });
  };

  render() {
    const playElement = this.state.muted ? <p>Play</p> : <p>Mute</p>;

    return (
      <div className="play-container">
        <div className="player-element">
          <audio
            src="http://bluecast-master.rtp.raleigh.ibm.com:8000/bluecast_128.mp3"
            ref={audio => {
              this.audio = audio;
            }}
          />
        </div>
        <button className="player-trigger" onClick={this.togglePlay}>
          {playElement}
        </button>
      </div>
    );
  }
}
