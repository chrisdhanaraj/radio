import React from 'react';
import { Link } from 'react-router';

const Dashboard = props => {
  return (
    <div className="dashboard">
      <div className="dashboard-nav">
        <ul className="dashboard-nav-list">
          <li><Link to="/dashboard">Shows</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/impromptu">Host Now</Link></li>
        </ul>
      </div>
      <div className="dashboard-content">
        {props.children}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: React.PropTypes.node,
};

export default Dashboard;
