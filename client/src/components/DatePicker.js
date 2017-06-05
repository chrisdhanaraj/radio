import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Row, Col, Label, Select } from '../elements';

const { Div } = glamorous;

export default class DatePicker extends Component {
  render() {
    const days = [
      {
        value: 0,
        label: 'Sun',
      },
      {
        value: 1,
        label: 'Mon',
      },
      {
        value: 2,
        label: 'Tues',
      },
      {
        value: 3,
        label: 'Wed',
      },
      {
        value: 4,
        label: 'Thurs',
      },
      {
        value: 5,
        label: 'Fri',
      },
      {
        value: 6,
        label: 'Sat',
      },
    ];

    const hours = [
      { value: 0, label: '12:00 A.M.' },
      { value: 1, label: '1:00 A.M.' },
      { value: 2, label: '2:00 A.M.' },
      { value: 3, label: '3:00 A.M.' },
      { value: 4, label: '4:00 A.M.' },
      { value: 5, label: '5:00 A.M.' },
      { value: 6, label: '6:00 A.M.' },
      { value: 7, label: '7:00 A.M.' },
      { value: 8, label: '8:00 A.M.' },
      { value: 9, label: '9:00 A.M.' },
      { value: 10, label: '10:00 A.M.' },
      { value: 11, label: '11:00 A.M.' },
      { value: 12, label: '12:00 P.M.' },
      { value: 13, label: '1:00 P.M.' },
      { value: 14, label: '2:00 P.M.' },
      { value: 15, label: '3:00 P.M.' },
      { value: 16, label: '4:00 P.M.' },
      { value: 17, label: '5:00 P.M.' },
      { value: 18, label: '6:00 P.M.' },
      { value: 19, label: '7:00 P.M.' },
      { value: 20, label: '8:00 P.M.' },
      { value: 21, label: '9:00 P.M.' },
      { value: 22, label: '10:00 P.M.' },
      { value: 23, label: '11:00 P.M.' },
    ];

    const { readOnly, day, hour } = this.props;

    return (
      <Div marginBottom="1rem">
        <Row>
          <Col>
            <Label className="datepicker-label">Date:</Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Select
              label="Day"
              name="showTimeDay"
              value={this.props.day}
              onChange={this.props.onTimeChange}
              readOnly={readOnly}
            >
              {days.map(day => (
                <option key={day.label} value={day.value}>{day.label}</option>
              ))}
            </Select>
          </Col>
          <Col>
            <Select
              label="Hour"
              name="showTimeHour"
              value={this.props.hour}
              onChange={this.props.onTimeChange}
              readOnly={readOnly}
            >
              {hours.map(hour => (
                <option key={hour.label} value={hour.value}>
                  {hour.label}
                </option>
              ))}
            </Select>
          </Col>
        </Row>
      </Div>
    );
  }
}
