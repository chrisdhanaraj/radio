import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Button } from '../elements';

const PlayingContainer = glamorous.div({
  borderBottom: '1px solid #f0f0f0',
  paddingBottom: '2rem',
});

const Live = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
  '& > img': {
    marginRight: '0.5rem',
  },
});

const Offline = glamorous.p({
  color: '#5f5f5f',
  textAlign: 'center',
});

const QualityContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  '& > button': {
    marginRight: '0.25rem',
  },
});

export default class Player extends Component {
  qualityEnum = {
    standard: '/bluecast_128k.mp3',
    low: '/bluecast_64k.mp3',
  };

  state = {
    loading: true,
    state: 'playing',
    muted: false,
    mount: 'https://9.20.64.218:8001',
    quality: 'standard',
  };

  componentDidMount() {
    this.player();
    this.setState({
      loading: false,
    });
  }

  player = () => {
    const { muted, loading, state } = this.state;

    if (this.audio) {
      if (loading || state === 'playing') {
        this.audio.play();
      }

      if (state === 'stopped') {
        this.audio.pause();
      }

      if (muted) {
        this.audio.muted = true;
      } else {
        this.audio.muted = false;
      }
    }
  };

  toggleMute = evt => {
    this.setState({
      muted: !this.state.muted,
    });
  };

  setQuality = quality => {
    this.setState(
      {
        state: 'stopped',
        quality,
      },
      () => {
        this.setState({
          state: 'playing',
        });
      }
    );
  };

  render() {
    const { muted, mount, quality } = this.state;
    const live = true;
    this.player();

    if (!live) {
      return <Offline>Nothing playing :(</Offline>;
    }

    return (
      <PlayingContainer>
        <Live onClick={this.toggleMute}>
          {muted
            ? <img src="/images/play.svg" />
            : <img src="/images/pause.svg" />}
          {muted ? <p>Muted</p> : <p>Playing Live</p>}
        </Live>
        <QualityContainer>
          <Button
            onClick={() => this.setQuality('low')}
            active={quality === 'low'}
          >
            Low
          </Button>
          <Button
            onClick={() => this.setQuality('standard')}
            active={quality === 'standard'}
          >
            Standard
          </Button>
        </QualityContainer>
        <audio
          ref={n => (this.audio = n)}
          src={`${mount}${this.qualityEnum[quality]}`}
        />
      </PlayingContainer>
    );
  }
}
