import React, { Component } from 'react';
import { Button } from '../elements/elements';
import FloatingInput from './FloatingInput';
import DatePicker from './DatePicker';
import SideNav from './SideNav';
import Select from './Select';
import { getTokenDetails, fetchWithHeaders } from '../utility/AuthService';

export default class AddShow extends Component {
  state = {
    showName: '',
    showDescription: '',
    showTimeDay: 0,
    showTimeHour: 0,
    showLength: 0,
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
      showLength,
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
        showLength,
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
      showLength,
      showPicture,
    } = this.state;

    return (
      <SideNav toggleMenu={toggleMenu} open={open}>
        <div className="add-show side-nav__content">
          <h1 className="h1" style={{ marginBottom: '2rem' }}>Add Show</h1>
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

            <Select
              style={{
                marginTop: '1rem',
              }}
              value={showLength}
              label="Length"
              name="showLength"
              onChange={this.handleChange}
            >
              <option value={30}>30</option>
              <option value={60}>60</option>
            </Select>

            <Button style={{ marginTop: '1rem' }} className="btn btn--primary">
              Submit
            </Button>
          </form>

        </div>
      </SideNav>
    );
  }
}
