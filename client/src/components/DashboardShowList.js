import React, { Component } from 'react';
import glamorous from 'glamorous';

const ShowList = glamorous.div({
  display: 'flex',
  marginTop: '1rem',
});

const ShowListItem = glamorous.a({
  cursor: 'pointer',
  flex: '0 0 50%',
  height: '460px',
  textDecoration: 'none',
  marginRight: '10px',
  '@media (min-width: 500px)': {
    flex: '0 0 25%',
  },
});

const Show = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: '50% 100%',
});

const ShowFooter = glamorous.div({
  backgroundColor: 'rgba(0,0,0,0.8)',
  marginTop: 'auto',
  padding: '1.5rem 0.5rem',
  '& > p': {
    color: '#fff',
  },
});

export default class DashboardShowList extends Component {
  render() {
    const { shows, handleItemClick } = this.props;

    return (
      <ShowList>
        {shows.map(show => (
          <ShowListItem
            key={show.showName}
            onClick={evt => handleItemClick(evt, show)}
          >
            <Show
              style={{
                backgroundImage: `url(${show.showPicture})`,
              }}
            >
              <ShowFooter>
                <p><strong>{show.showName}</strong></p>
                <p>{show.showDescription}</p>
              </ShowFooter>
            </Show>
          </ShowListItem>
        ))}
      </ShowList>
    );
  }
}
