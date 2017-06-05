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
  overflow: 'auto',
}));

const Table = glamorous.table(props => ({
  height: '100%',
  width: '100%',
  textAlign: 'left',
  borderCollapse: 'collapse',
  borderSpacing: 0,
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

const HeaderCell = glamorous.th({
  height: '70px',
  padding: '0.5rem',
  border: '1px solid transparent',
  borderRight: '1px solid rgba(256, 256, 256, 0.1)',
})

const Cell = glamorous.td({
  height: '70px',
  padding: '0.5rem',
  border: '1px solid transparent',
  borderRight: '1px solid rgba(256, 256, 256, 0.1)',
});

const FilledCell = glamorous(Cell)({
  backgroundColor: '#fff',
  border: '1px solid #000',
  borderRight: '1px solid #000',
  color: '#000',
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
    const timeArray = [
      <Cell key={time}>
        {time.label}
      </Cell>,
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
        timeArray.push(
          <FilledCell key={match.showName}>
            <strong>{match.showName}</strong>
            {' '}
            <br />
            {' '}
            {match.showOwner.djName}
          </FilledCell>
        );
      } else {
        timeArray.push(<Cell key={i} />);
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
              <HeaderCell>CST</HeaderCell>
              <HeaderCell>Monday</HeaderCell>
              <HeaderCell>Tuesday</HeaderCell>
              <HeaderCell>Wednesday</HeaderCell>
              <HeaderCell>Thursday</HeaderCell>
              <HeaderCell>Friday</HeaderCell>
            </TableRowHeading>
            {timeslots.map((slot, index) => {
              return (
                <tr key={index}>
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
