import React, { Component } from 'react';
import glamorous, { Div } from 'glamorous';
import io from 'socket.io-client';
import NowPlaying from '../components/NowPlaying';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';
import {
  Container,
  BackgroundContainer,
  MainContainer,
  SidebarContainer,
} from '../elements/layout';
import { fetchWithHeaders } from '../utility/AuthService';

const socket = io('/');

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      showCalendar: false,
      showShows: false,
      nowPlaying: {},
      loading: true,
    };
  }

  componentDidMount() {
    socket.on('showStart', data => {
      this.setState({
        showCalendar: false,
        nowPlaying: data,
      });
    });

    socket.on('update', update => {
      const merge = Object.assign({}, this.state.nowPlaying, update);

      console.log(merge);

      this.setState({
        nowPlaying: merge,
      });
    });

    fetchWithHeaders('/api/episodes/live').then(data => {
      console.log('data', data);

      this.setState({
        nowPlaying: data,
        loading: false,
      });
    });
  }

  toggleCalendar = () => {
    this.setState({
      showCalendar: !this.state.showCalendar,
    });
  };

  toggleShows = () => {
    this.setState({
      showShows: !this.state.showShows,
    });
  };

  render() {
    const { showShows, loading, nowPlaying } = this.state;
    let { showCalendar } = this.state;

    if (loading) {
      return (
        <Container>
          <SidebarContainer />
          <MainContainer>
            <p>Loading...</p>
          </MainContainer>
        </Container>
      );
    }

    const { tracklist, episodeBackground, ...other } = nowPlaying;
    if (!other.live) {
      showCalendar = true;
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
          <Sidebar
            toggleCalendar={this.toggleCalendar}
            toggleShows={this.toggleShows}
            {...other}
          />
        </SidebarContainer>
        <MainContainer>

          {other.live && <NowPlaying tracklist={tracklist} />}

          <Calendar open={showCalendar} />
        </MainContainer>
      </BackgroundContainer>
    );
  }
}
