import React, { Component } from 'react';
import DatePicker from '../components/DatePicker';

class AddShow extends Component {
  state = {
    day: 1,
    hour: 9,
    title: '',
    description: '',
    showImage: '',
    defaultImage: '',
  }

  handleChange = (changeObj) => {
    this.setState(changeObj);
  }

  render() {
    const { day, hour, title, description, showImage, defaultImage } = this.state;

    return (
      <div className="internal-view add-show">
        <h1>Add a show</h1>

        <h2 className="input-label">Show Time</h2>
        <DatePicker handleChange={this.handleChange} day={day} hour={hour} />

        <div className="form-row">
          <div className="form-group">
            <h2 className="input-label">Title</h2>
            <input
              type="text"
              placeholder="Title"
              onChange={(evt) => { this.handleChange({ title: evt.target.value }); }}
              value={title}
            />
          </div>

          <div className="form-group">
            <h2 className="input-label">Description</h2>
            <textarea
              placeholder="Description"
              onChange={(evt) => { this.handleChange({ description: evt.target.value }); }}
              value={description}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="image-group">
            <div className="form-group">
              <h2 className="input-label">Show Art URL</h2>
              <input
                type="text"
                placeholder="Show Image"
                onChange={(evt) => { this.handleChange({ showImage: evt.target.value }); }}
                value={showImage}
              />
            </div>
            <img className="image-group__preview" alt="show" src={showImage} />
          </div>

          <div className="image-group">
            <div className="form-group">
              <h2 className="input-label">Default background url</h2>
              <input
                type="text"
                placeholder="Default background"
                onChange={(evt) => { this.handleChange({ defaultImage: evt.target.value }); }}
                value={defaultImage}
              />
            </div>
            <img className="image-group__preview" alt="default background" src={defaultImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default AddShow;
