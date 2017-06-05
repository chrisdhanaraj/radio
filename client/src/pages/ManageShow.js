import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import { Button, Container, Row, Col } from '../elements';
import ShowDetails from '../components/ShowDetails';
import AddShow from '../components/AddShow';
import DashboardShowList from '../components/DashboardShowList';
import { getTokenDetails, fetchWithHeaders } from '../utility/AuthService';

export default class ManageShow extends Component {
  state = {
    loading: true,
    currentShow: {
      _id: '',
      showOwner: '',
      showName: '',
      showDescription: '',
      showTime: {
        day: 1,
        hour: 17,
      },
      showPicture: '',
      episodes: [],
    },
    shows: [],
    showDetailsOpen: false,
    addShowOpen: false,
  };

  toggleShowDetails = (evt, show) => {
    evt.preventDefault();

    const newState = Object.assign(
      {
        showDetailsOpen: !this.state.showDetailsOpen,
      },
      show !== undefined ? { currentShow: show } : null
    );

    this.setState(newState);
  };

  toggleAddShow = () => {
    this.setState({
      addShowOpen: !this.state.addShowOpen,
    });
  };

  refresh = () => {
    const tokenDetails = getTokenDetails();

    fetchWithHeaders('/api/show', {
      method: 'POST',
      body: JSON.stringify({
        showOwner: tokenDetails._id,
      }),
    }).then(res => {
      this.setState({
        shows: res.shows,
      });
    });
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
        loading: false,
        shows: res.shows,
      });
    });
  }

  render() {
    const {
      shows,
      loading,
      currentShow,
      addShowOpen,
      showDetailsOpen,
    } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <Container>
        <Row centered>
          <Col>
            <h1>Manage Shows</h1>
          </Col>
          <Col>
            <Button onClick={this.toggleAddShow}>
              Add Show
            </Button>
          </Col>
        </Row>

        <DashboardShowList
          shows={shows}
          handleItemClick={this.toggleShowDetails}
        />

        <AddShow
          toggleMenu={() => this.setState({ addShowOpen: !addShowOpen })}
          updateShows={newShow => {
            const newShows = shows.concat(newShow);

            this.setState({
              shows: newShows,
            });
          }}
          open={addShowOpen}
        />

        <ShowDetails
          refresh={this.refresh}
          toggleMenu={this.toggleShowDetails}
          open={showDetailsOpen}
          show={currentShow}
        />
      </Container>
    );
  }
}
