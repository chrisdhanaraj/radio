import React, { Component, PureComponent } from 'react';
import glamorous from 'glamorous';
import { Input, Button } from '../elements';

export const Tracks = glamorous.ul({
  listStyle: 'none',
  paddingLeft: 0,
  maxWidth: '500px',
});

export const Track = glamorous.li({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  '> *': {
    marginRight: '1rem',
  },
  '> button': {
    marginLeft: '2rem',
  },
});

export class AddTrack extends Component {
  render() {
    const { handleChange, addTrack, trackTitle, trackArtist } = this.props;

    return (
      <Track
        css={{
          alignItems: 'initial',
        }}
      >
        <Input
          className="addtrack"
          onChange={handleChange}
          placeholder="Title"
          type="text"
          name="addTrackTitle"
          value={trackTitle}
        />
        <Input
          onChange={handleChange}
          placeholder="Artist"
          type="text"
          name="addTrackArtist"
          value={trackArtist}
        />
        <Button onClick={addTrack} css={{ height: '30px' }}>
          <svg
            width="12px"
            height="12px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              id="Shape"
              points="14 0 10 0 10 10 0 10 0 14 10 14 10 24 14 24 14 14 24 14 24 10 14 10"
            />
          </svg>
        </Button>
      </Track>
    );
  }
}

export class TrackItem extends PureComponent {
  render() {
    const { track, removeTrack } = this.props;
    return (
      <Track key={track.title + track.artist} className="tracklist-item">
        <span className="tracklist-item__title">{track.title}</span>

        <span className="tracklist-item__artist">
          {track.artist}
        </span>

        <Button onClick={() => removeTrack(track)} css={{ height: '30px' }}>
          <svg stroke="#000" width="12px" viewBox="0 0 10 5">
            <line x1="0" x2="10" strokeWidth="3" />
          </svg>
        </Button>
      </Track>
    );
  }
}
