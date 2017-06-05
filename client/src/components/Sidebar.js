import React, { PureComponent } from 'react';
import Player from './Player';
import glamorous from 'glamorous';
import { css } from 'glamor';

const { Div } = glamorous;

const animationStyles = () => {
  const rotate = css.keyframes({
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': { transform: 'rotate(360deg)' },
  });

  return {
    animation: `${rotate} 50s linear infinite`,
  };
};

const EpisodeContainer = glamorous.div({
  margin: '2rem 0 1rem',
});

const ShowTitle = glamorous.p({
  fontWeight: 700,
  marginBottom: '0.5rem',
});

const EpisodeTitle = glamorous.span({
  fontWeight: 400,
});

const EpisodeDescription = glamorous.p({});

const Nav = glamorous.nav({
  marginTop: 'auto',
});

const NavList = glamorous.ul({
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
});

const NavListItem = glamorous.li({
  cursor: 'pointer',
  fontWeight: '700',
  padding: '0 0.5rem',
  textTransform: 'uppercase',
});

const Gif = glamorous.div(
  props => ({
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundImage: props.episodeGif !== undefined
      ? `url('${props.episodeGif}')`
      : `url('/images/ibmcr.svg')`,
    backgroundRepeat: 'no-repeat',
    marginBottom: '1rem',
  }),
  animationStyles
);

export default class Sidebar extends PureComponent {
  state = {
    muted: false,
  };

  render() {
    const {
      show,
      episodeName,
      live,
      episodeDescription,
      episodeGif,
      toggleCalendar,
      toggleShows,
    } = this.props;

    const { muted } = this.state;

    return (
      <Div height="100%" display="flex" flexDirection="column">
        <Div className="gif-contianer" display="flex" justifyContent="center">
          <Gif episodeGif={episodeGif} />
        </Div>

        <Player />

        {live &&
          (episodeName !== '' || episodeDescription !== '') &&
          <EpisodeContainer>
            <ShowTitle>
              {episodeName !== '' &&
                <EpisodeTitle>{episodeName} on </EpisodeTitle>}
              {show.showName}
            </ShowTitle>
            {episodeDescription !== '' &&
              <EpisodeDescription>{episodeDescription}</EpisodeDescription>}
          </EpisodeContainer>}

        <Nav>
          <NavList>
            <NavListItem onClick={toggleCalendar}>Calendar</NavListItem>
            <NavListItem onClick={toggleShows}>Shows</NavListItem>
          </NavList>
        </Nav>
      </Div>
    );
  }
}
