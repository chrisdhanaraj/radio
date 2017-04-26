import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div className="internal-view">
      <h1>Shows</h1>
      <Link to="/dashboard/add-show" className="create-btn">Add a show</Link>
    </div>
  );
};
