import React, { Component } from 'react';
import { Button, FloatingInput } from '../elements';
import DatePicker from './DatePicker';
import SideNav from './SideNav';
import { getTokenDetails, fetchWithHeaders } from '../utility/AuthService';

export default class AddShow extends Component {
  state = {
    showName: '',
    showDescription: '',
    showTimeDay: 0,
    showTimeHour: 0,
    showPicture: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const user = getTokenDetails();
    const { _id } = user;
    const {
      showName,
      showDescription,
      showTimeDay,
      showTimeHour,
      showPicture,
    } = this.state;

    const { toggleMenu, updateShows } = this.props;

    fetchWithHeaders(`/api/shows`, {
      method: 'POST',
      body: JSON.stringify({
        showOwner: _id,
        showName,
        showDescription,
        showTime: {
          day: showTimeDay,
          hour: showTimeHour,
        },
        showPicture,
      }),
    }).then(res => {
      updateShows(res.show);
      toggleMenu();
    });
  };

  closeMenu = () => {
    this.props.toggleMenu();
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    const { toggleMenu, open } = this.props;
    const {
      showName,
      showDescription,
      showTimeDay,
      showTimeHour,
      showPicture,
    } = this.state;

    return (
      <SideNav toggleMenu={toggleMenu} open={open}>
        <div>
          <h1 style={{ marginBottom: '2rem' }}>Add Show</h1>
          <form onSubmit={this.handleSubmit}>

            <FloatingInput
              required
              value={showName}
              onChange={this.handleChange}
              name="showName"
              label="Title"
              type="text"
            />

            <FloatingInput
              required
              value={showDescription}
              onChange={this.handleChange}
              name="showDescription"
              label="Description"
              type="text"
            />

            <div className="row">
              <div className="col">
                <FloatingInput
                  value={showPicture}
                  required
                  onChange={this.handleChange}
                  name="showPicture"
                  label="Picture"
                  type="text"
                />
              </div>
              <div className="col">
                <img src={showPicture} />
              </div>
            </div>

            <DatePicker
              label="Time"
              day={showTimeDay}
              hour={showTimeHour}
              onTimeChange={this.handleChange}
            />

            <Button style={{ marginTop: '1rem' }}>
              Submit
            </Button>
          </form>

        </div>
      </SideNav>
    );
  }
}
