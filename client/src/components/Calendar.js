import React, { Component } from 'react';
import glamorous from 'glamorous';
import _ from 'lodash';
import { fetchWithHeaders } from '../utility/AuthService';

const CalenderContainer = glamorous.div(props => ({
  position: 'fixed',
  bottom: 0,
  left: '300px',
  top: 0,
  right: 0,
  backgroundColor: '#000',
  transform: props.open ? 'translateY(0)' : 'translateY(-110%)',
  transition: 'transform 0.2s cubic-bezier(0,0,0.3,1)',
  willChange: 'transform',
  padding: '0 1rem',
}));

const Table = glamorous.table(props => ({
  height: '100%',
  width: '100%',
  textAlign: 'left',
}));

const TableRowHeading = glamorous.tr({
  textTransform: 'uppercase',
  borderBottom: '2px solid #fff',
  '& > th:first-child': {
    width: '100px',
  },
  '& > th': {
    width: '120px',
  },
  '& > td': {
    padding: '5px',
  },
});

export default class Calendar extends Component {
  state = {
    shows: [],
    loading: true,
  };

  componentDidMount() {
    fetchWithHeaders('/api/shows').then(shows => {
      this.setState({
        shows,
        loading: false,
      });
    });
  }

  getTimeSchedule = time => {
    const counter = 1;
    const timeArray = [
      <td>
        {time.label}
      </td>,
    ];
    const { shows } = this.state;

    for (let i = 1; i <= 5; i++) {
      const match = _.find(shows, o => {
        return _.isEqual(o.showTime, {
          day: i.toString(),
          hour: time.value.toString(),
        });
      });

      if (match) {
        console.log(match);
      }
      if (match) {
        timeArray.push(
          <td>
            <strong>{match.showName}</strong>
            {' '}
            <br />
            {' '}
            {match.showOwner.djName}
          </td>
        );
      } else {
        timeArray.push(<td />);
      }
    }

    return timeArray;
  };

  render() {
    const { open } = this.props;
    const timeslots = [
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
    ];

    if (this.state.loading) {
      return <p>Loading..</p>;
    }

    return (
      <CalenderContainer open={open}>
        <h1>Schedule</h1>
        <Table>
          <tbody>
            <TableRowHeading>
              <th>CST</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </TableRowHeading>
            {timeslots.map(slot => {
              return (
                <tr>
                  {this.getTimeSchedule(slot)}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </CalenderContainer>
    );
  }
}
