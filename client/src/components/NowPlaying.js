import React, { Component } from 'react';
import glamorous from 'glamorous';

const { Div } = glamorous;

const Label = glamorous.h2({
  display: 'inline-block',
  fontSize: '14px',
  textTransform: 'uppercase',
  marginBottom: '1rem',
});

const Song = glamorous.div({
  display: 'flex',
  fontSize: '20px',
  marginBottom: '0.5rem',
});

const SongTitle = glamorous.p({
  '&::after': {
    display: 'inline-block',
    content: `' - '`,
    padding: '0 0.5rem',
  },
});

const SongArtist = glamorous.p();

export default class NowPlaying extends Component {
  render() {
    const { tracklist } = this.props;

    if (tracklist.length === 0) {
      return null;
    }

    const currentSong = tracklist[tracklist.length - 1];
    const previousSongs = tracklist.slice(0, tracklist.length - 1).reverse();

    return (
      <div>
        <Div marginBottom="3rem">
          <Label>Now Playing</Label>
          <Song
            css={{
              padding: '0 0 1rem 1rem',
              borderBottom: '2px solid #fff',
              borderLeft: '2px solid #fff',
            }}
          >
            <SongTitle>{currentSong.artist}</SongTitle>
            <SongArtist>{currentSong.title}</SongArtist>
          </Song>
        </Div>
        {previousSongs.length > 0 &&
          <div>
            <Label>Previously Played</Label>
            {previousSongs.map((song, index) => {
              return (
                <Song key={song.title + index}>
                  <SongTitle>{song.title}</SongTitle>
                  <SongArtist>{song.artist}</SongArtist>
                </Song>
              );
            })}
          </div>}
      </div>
    );
  }
}
