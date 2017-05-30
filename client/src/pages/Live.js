import React, { Component } from 'react';
import io from 'socket.io-client';
import glamorous from 'glamorous';
import { getTokenDetails, fetchWithHeaders } from '../utility/AuthService';
import { Button } from '../elements/elements';
import { Label } from '../elements/typography';
import { Input, TextArea } from '../components/Input';
import {
  BackgroundContainer,
  SidebarContainer,
  Container,
  Row,
  Col,
} from '../elements/layout';
import DashboardShowList from '../components/DashboardShowList';
import { AddTrack, TrackItem, Tracks } from '../components/LiveItems';

const { Div } = glamorous;

const PickBox = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
});

const PickShowContainer = glamorous.div({
  display: 'flex',
});

const PickShow = glamorous.a({
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
  width: '300px',
  height: '300px',
  marginRight: '1rem',
});

const TrackContainer = glamorous.div({
  padding: '2rem 15px',
  zIndex: 1,
});

export default class Live extends Component {
  state = {
    showLoading: false,
    shows: [],
    live: false,
    episodeId: '',
    episodeName: '',
    episodeDescription: '',
    episodeGif: '',
    episodeBackground: '',
    tracklist: [],
    addTrackTitle: '',
    addTrackArtist: '',
  };

  componentDidMount() {
    const tokenDetails = getTokenDetails();

    fetchWithHeaders('/api/show', {
      method: 'POST',
      body: JSON.stringify({
        showOwner: tokenDetails._id,
      }),
    }).then(res => {
      this.setState({
        showLoading: false,
        shows: res.shows,
      });
    });
  }

  handleBlur = evt => {
    const { episodeId } = this.state;
    const update = {
      [evt.target.name]: evt.target.value,
    };

    fetchWithHeaders(`/api/episodes/${episodeId}`, {
      method: 'PATCH',
      body: JSON.stringify(update),
    });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  goLive = (evt, show) => {
    fetchWithHeaders('/api/episodes/live', {
      method: 'POST',
      body: JSON.stringify({
        show: show._id,
      }),
    }).then(res => {
      this.setState({
        episodeId: res.data._id,
        live: true,
      });
    });
  };

  endShow = evt => {
    const { episodeId } = this.state;

    this.setState(
      {
        live: false,
      },
      () => {
        fetchWithHeaders(`/api/episodes/${episodeId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            live: false,
          }),
        }).then(res => {
          console.log('sent udpate: ', res);
        });
      }
    );
  };

  addTrack = evt => {
    evt.preventDefault();

    const { episodeId, tracklist, addTrackTitle, addTrackArtist } = this.state;
    tracklist.push({ title: addTrackTitle, artist: addTrackArtist });

    console.log('id: ', episodeId);

    document.querySelector('.addtrack').focus();

    this.setState(
      {
        tracklist,
        addTrackTitle: '',
        addTrackArtist: '',
      },
      () => {
        fetchWithHeaders(`/api/episodes/${episodeId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            tracklist: tracklist,
          }),
        }).then(res => {
          console.log('sent udpate: ', res);
        });
      }
    );
  };

  removeTrack = track => {
    const { tracklist } = this.state;

    const newTracklist = tracklist.filter(trackItem => {
      return trackItem !== track;
    });

    this.setState(
      {
        tracklist: newTracklist,
      },
      () => {
        fetchWithHeaders(`/api/episodes/${episodeId}`, {
          method: 'PATCH',
          body: JSON.stringify({
            tracklist: tracklist,
          }),
        }).then(res => {
          console.log('sent udpate: ', res);
        });
      }
    );
  };

  render() {
    const {
      episodeName,
      episodeDescription,
      episodeGif,
      episodeBackground,
      tracklist,
      addTrackTitle,
      addTrackArtist,
      showLoading,
      shows,
      live,
    } = this.state;

    if (showLoading) {
      return <p>Loading...</p>;
    }

    if (!live) {
      return (
        <Container>
          <PickBox>
            <h1>Pick a show</h1>

            <DashboardShowList shows={shows} handleItemClick={this.goLive} />
          </PickBox>
        </Container>
      );
    }

    return (
      <BackgroundContainer
        css={{
          '&::before': {
            backgroundImage: `url('${episodeBackground}')`,
          },
        }}
      >
        <SidebarContainer>
          <div>
            <Input
              onBlur={this.handleBlur}
              label="Episode Background"
              placeholder="background image url"
              type="text"
              name="episodeBackground"
              value={episodeBackground}
              onChange={this.handleChange}
            />
          </div>

          <Div css={{ marginBottom: '1rem' }}>
            <Input
              onBlur={this.handleBlur}
              label="Episode Gif"
              name="episodeGif"
              onChange={this.handleChange}
              type="text"
              placeholder="gif url"
              value={episodeGif}
            />
            <img src={episodeGif} />
          </Div>

          <div>
            <Input
              onBlur={this.handleBlur}
              label="Episode Name"
              name="episodeName"
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
              value={episodeName}
            />
          </div>

          <div>
            <TextArea
              onBlur={this.handleBlur}
              label="Episode Description"
              name="episodeDescription"
              onChange={this.handleChange}
              type="text"
              placeholder="Description"
              value={episodeDescription}
            />
          </div>

          <Button onClick={this.endShow}>End Show</Button>
        </SidebarContainer>
        <TrackContainer>
          <div>
            <Label>Tracklist</Label>
            <Tracks>
              <form onSubmit={this.addTrack}>
                <AddTrack
                  handleChange={this.handleChange}
                  addTrack={this.addTrack}
                  trackTitle={addTrackTitle}
                  trackArtist={addTrackArtist}
                />
              </form>
            </Tracks>
            <Tracks>
              {tracklist.map(track => (
                <TrackItem track={track} removeTrack={this.removeTrack} />
              ))}
            </Tracks>
          </div>
        </TrackContainer>
      </BackgroundContainer>
    );
  }
}
