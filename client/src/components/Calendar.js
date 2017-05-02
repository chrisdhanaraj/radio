import React from 'react';
import classNames from 'classnames';
import Slot from '../components/Slot';

const Calendar = props => {
  const rootClass = classNames({
    calendar: true,
    'calendar-active': props.active,
  });

  return (
    <div className={rootClass}>
      <table className="schedule">
        <h1>Schedule</h1>
        <tbody>
          <tr className="headings">
            <th className="time">Central time</th>
            <th className="weekday">Monday</th>
            <th className="weekday">Tuesday</th>
            <th className="weekday">Wednesday</th>
            <th className="weekday">Thursday</th>
            <th className="weekday">Friday</th>
          </tr>
          <tr className="timeslot">
            <td>9:00AM</td>
            <Slot />
            <td />
            <td />
            <Slot />
            <Slot />
          </tr>
          <tr className="timeslot">
            <td>10:00AM</td>
            <Slot title="DJ Darlene" dj="The worst person ever" />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>11:00AM</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>12:00PM</td>
            <Slot />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>1:00PM</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>2:00PM</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>3:00PM</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>4:00PM</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>5:00PM</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr className="timeslot">
            <td>6:00PM</td>
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
