import React, { PureComponent } from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import { ActiveButton, Button } from '../elements/elements';

const { Div } = glamorous;

const animationStyles = props => {
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

const QualityContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  '& > button': {
    marginRight: '0.25rem',
  },
});

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

const playingComponent = (live, muted) => {
  if (!live) {
    return null;
  }

  return (
    <PlayingContainer>
      <Live>
        {muted
          ? <img src="/images/play.svg" />
          : <img src="/images/pause.svg" />}
        {muted ? <p>Muted</p> : <p>Playing Live</p>}
      </Live>
      <QualityContainer>
        <Button>Low</Button>
        <Button active>Standard</Button>
        <Button>High</Button>
      </QualityContainer>
    </PlayingContainer>
  );
};

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

    const Gif = glamorous.div(
      {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        backgroundSize: 'cover',
        backgroundImage: `url('${episodeGif}')`,
        backgroundRepeat: 'no-repeat',
        marginBottom: '1rem',
      },
      animationStyles
    );

    return (
      <Div height="100%" display="flex" flexDirection="column">
        <Div display="flex" justifyContent="center">
          <Gif />
        </Div>

        {playingComponent(live, muted)}

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
