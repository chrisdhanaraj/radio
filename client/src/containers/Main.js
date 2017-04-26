import React, { Component } from 'react';
import Playlist from '../components/Playlist';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';
import Showlist from '../components/Showlist';

const space = '';
const ship =
  'http://i.kinja-img.com/gawker-media/image/upload/t_original/vlvoohrx28sqjq6jnjhb.jpg';

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      showCalendar: false,
      showShows: false,
    };
  }

  componentDidMount() {}

  toggleCalendar = () => {
    // what this does
    this.setState({
      showCalendar: !this.state.showCalendar,
    });
  };

  toggleShows = () => {
    // what this does
    this.setState({
      showShows: !this.state.showShows,
    });
  };

  render() {
    const { showCalendar, showShows } = this.state;

    const containerStyle = {
      height: '100vh',
    };

    const gif = space;

    const backgroundStyle = {
      backgroundImage: `url(${ship})`,
      backgroundSize: 'cover',
    };

    // const red = (evalutate this expression) ? (return this if true) : (return this if false);
    return (
      <div className="main" style={containerStyle}>
        <div className="parallax" style={backgroundStyle} />
        <div className="main-content">
          <Calendar active={showCalendar} />
          <Showlist active={showShows} />
          <Playlist />
        </div>
        <div className="main-sidebar">
          <Sidebar
            gif={gif}
            toggleCalendar={this.toggleCalendar}
            toggleShows={this.toggleShows}
            milena="Snow Queen"
          />
        </div>
      </div>
    );
  }
}
