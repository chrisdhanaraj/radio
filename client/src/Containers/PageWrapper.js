import React, { Component } from 'react';
import Header from '../Components/Header';
import SideNav from '../Components/SideNav';
import merge from 'lodash.merge';
import Tooltip from '../Components/Tooltip';

function PageWrapper(Page) {
  return class extends Component {
    constructor(props) {
      super(props);

      const oldState = this.getStore('nav');

      if (oldState !== null) {
        this.state = oldState;
      } else {
        this.state = {
          notes: [],
          sideNav: false,
          location: 0,
          progress: {
            'mahindra-finance': false,
            '01-1-setting-the-scene': false,
            '01-2-entry-into-rural-market': false,
            '01-4-operationalizing-a-rural-market-strategy': false,
            '01-5-growth-trajectory': false,
            review1: false,
            '02-1-entry-into-new-business-segments': false,
            '02-2-housing-finance': false,
            review2: false
          }
        };
      }
    }

    scrollListener = evt => {
      const element = evt.target.scrollingElement;
      const isScrolled = window.innerHeight + window.pageYOffset + 100 >=
        document.body.offsetHeight;
      const pathname = this.props.location.pathname;

      const location = pathname === '/mahindra-finance'
        ? 'mahindra-finance'
        : pathname.split('mahindra-finance/')[1];

      if (!this.state.progress[location]) {
        if (isScrolled) {
          const newState = merge(this.state, {
            progress: {
              [location]: true
            }
          });
          this.setState(newState);
        }
      }
    };

    storeState = (key, state) => {
      window.localStorage.setItem(key, JSON.stringify(state));
    };

    getStore = key => {
      return JSON.parse(window.localStorage.getItem(key));
    };

    deleteStore = key => {
      window.localStorage.removeItem(key);
    };

    componentDidMount() {
      document.addEventListener('scroll', this.scrollListener);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.scrollListener);
    }

    updateNav = navUpdate => {
      this.setState({
        nav: navUpdate
      });
    };

    openNav = () => {
      this.setState({
        sideNav: true
      });
    };

    closeNav = () => {
      this.setState({
        sideNav: false
      });
    };

    changeLocation = location => {
      this.setState({
        location
      });
    };

    addNote = note => {
      const newNotes = this.state.notes.push(note);
      this.setState({
        notes: newNotes
      });
    };

    render() {
      this.storeState('nav', this.state);
      return (
        <div className="page-container">
          <Header openNav={this.openNav} />
          <SideNav
            notes={this.state.notes}
            changeLocation={this.changeLocation}
            location={this.state.location}
            progress={this.state.progress}
            open={this.state.sideNav}
            closeNav={this.closeNav}
          />
          <Page updateNav={this.updateNav} {...this.props} />
          <Tooltip />
        </div>
      );
    }
  };
}

export default PageWrapper;
