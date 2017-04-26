import React, { Component } from 'react';
import Select from 'react-select';

export default class DatePicker extends Component {
  state = {
    day: 1,
    hour: 9,
  };

  handleChange = (value, type) => {
    this.props.handleChange({
      [type]: value,
    });
  };

  render() {
    const days = [
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
    ];

    const hours = [
      { value: 8, label: '8:00 A.M.' },
      { value: 9, label: '9:00 A.M' },
      { value: 10, label: '10:00 A.M.' },
      { value: 11, label: '11:00 A.M.' },
      { value: 12, label: '12:00 P.M.' },
      { value: 1, label: '1:00 P.M.' },
      { value: 2, label: '2:00 P.M.' },
      { value: 3, label: '3:00 P.M.' },
      { value: 4, label: '4:00 P.M.' },
      { value: 5, label: '5:00 P.M.' },
      { value: 6, label: '6:00 P.M.' },
    ];

    const { day, hour } = this.props;

    return (
      <div className="datepicker">
        <div className="datepicker-days">
          <Select
            name="datepicker-days"
            clearable={false}
            value={day}
            onChange={result => {
              if (result.value !== undefined) {
                this.handleChange(result.value, 'day');
              }
            }}
            options={days}
          />
        </div>
        <div className="datepicker-hours">
          <Select
            name="datepicker-hours"
            clearable={false}
            value={hour}
            onChange={result => {
              if (result.value !== undefined) {
                this.handleChange(result.value, 'hour');
              }
            }}
            options={hours}
          />
        </div>
      </div>
    );
  }
}
