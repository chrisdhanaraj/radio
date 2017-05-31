import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Input, TextArea } from './Input';
import { Row, Col } from '../elements/layout';
import { Button } from '../elements/elements';
import { Label } from '../elements/typography';
import SideNav from './SideNav';
import DatePicker from './DatePicker';
import { fetchWithHeaders } from '../utility/AuthService';

const { Div } = glamorous;

const Table = glamorous.table({
  textAlign: 'left',
  ' td, th': {
    padding: '0.5rem 0.5rem 0.5rem 0',
  },
});

export default class ShowDetails extends Component {
  state = {
    readOnly: true,
    showName: this.props.show.showName,
    showDescription: this.props.show.showDescription,
    showTimeDay: this.props.show.showTime.day,
    showTimeHour: this.props.show.showTime.hour,
    showPicture: this.props.show.showPicture,
    showLength: this.props.show.showLength,
    episodes: this.props.show.episodes,
    loading: false,
  };

  getEditableState = name => {
    return this.state[`${name}Editable`] === undefined
      ? true
      : this.state[`${name}Editable`];
  };

  handleChange = evt => {
    if (this.state.readOnly) return;
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  toggleEditable = evt => {
    const {
      readOnly,
      showName,
      showDescription,
      showTimeDay,
      showTimeHour,
      showLength,
      showPicture,
    } = this.state;

    const patch = {
      showName,
      showDescription,
      showTime: {
        day: showTimeDay,
        hour: showTimeHour,
      },
      showLength,
      showPicture,
    };

    if (readOnly) {
      this.setState({
        readOnly: !readOnly,
      });
    } else {
      this.setState(
        {
          loading: true,
        },
        () => {
          fetchWithHeaders(`api/shows/${this.props.show._id}`, {
            method: 'PATCH',
            body: JSON.stringify(patch),
          }).then(res => {
            this.props.refresh();
            this.setState({
              loading: false,
              readOnly: !readOnly,
            });
          });
        }
      );
    }
  };

  componentWillReceiveProps(nextProps) {
    if (this.state.showName !== nextProps.show.showName) {
      this.setState({
        showName: nextProps.show.showName,
        showDescription: nextProps.show.showDescription,
        showTimeDay: nextProps.show.showTime.day,
        showTimeHour: nextProps.show.showTime.hour,
        showPicture: nextProps.show.showPicture,
        episodes: nextProps.show.episodes,
      });
    }
  }

  render() {
    const { toggleMenu, open } = this.props;
    const {
      showName,
      showDescription,
      showTimeDay,
      showTimeHour,
      showPicture,
      episodes,
      readOnly,
    } = this.state;

    console.log(episodes);

    return (
      <SideNav className="show-details" toggleMenu={toggleMenu} open={open}>
        <div className="side-nav__content">
          <Div
            borderBottom="1px solid #fff"
            margin="0 -1rem 1rem"
            padding="0 1rem 1rem"
            textAlign="right"
          >
            <Button onClick={this.toggleEditable}>
              {readOnly ? 'Edit' : 'Finish'}
            </Button>
          </Div>

          <Input
            label="Name: "
            type="text"
            name="showName"
            value={showName}
            onChange={this.handleChange}
            readOnly={readOnly}
          />

          <TextArea
            label="Description: "
            type="text"
            name="showDescription"
            value={showDescription}
            onChange={this.handleChange}
            readOnly={readOnly}
          />

          <Row>
            <Col colNum={1}>
              <Input
                label="Show Picture: "
                className="p"
                type="text"
                name="showPicture"
                value={showPicture}
                onChange={this.handleChange}
                readOnly={readOnly}
              />
            </Col>
            <Col colNum={1}>
              <img src={showPicture} />
            </Col>
          </Row>

          <DatePicker
            day={showTimeDay}
            hour={showTimeHour}
            onTimeChange={this.handleChange}
            readOnly={readOnly}
          />

          <div className="form-group">
            <Label>Episode List</Label>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {episodes.length > 0
                  ? episodes.map(episode => {
                      const date = new Date(episode.date);

                      return (
                        <tr key={episode.episodeName}>
                          <td>{episode.episodeName}</td>
                          <td>{episode.episodeDescription}</td>
                          <td
                          >{`${date.getMonth() + 1} / ${wwwdate.getDate()}`}</td>
                        </tr>
                      );
                    })
                  : <tr>
                      <td style={{ width: '100%' }}>
                        No episodes created
                      </td>
                    </tr>}
              </tbody>
            </Table>
          </div>
        </div>
      </SideNav>
    );
  }
}
