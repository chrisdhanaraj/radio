import React, { Component } from 'react';
import InlineTextField from '../components/InlineTextField';


class Profile extends Component {
  state = {
    editing: {
      djName: false,
      firstName: false,
      lastName: false,
      email: false,
      biography: false,
      avatar: false,
    },
  }

  render() {
    const { editing } = this.state;

    return (
      <div className="internal-view">
        <h1>Profile</h1>

        <div className="profile-detail">
          <strong>DJ name</strong>
          <InlineTextField editing={editing.djName} value="" />
        </div>

        <div className="profile-detail">
          <strong>First name</strong>
          <InlineTextField editing={editing.firstName} value="" />
        </div>

        <div className="profile-detail">
          <strong>Last Name</strong>
          <InlineTextField editing={editing.lastName} value="" />
        </div>

        <div className="profile-detail">
          <strong>Email</strong>
          <InlineTextField editing={editing.email} value="" />
        </div>

        <div className="profile-detail">
          <strong>Biography</strong>
          <InlineTextField editing={editing.biography} value="" />
        </div>

        <div className="profile-detail">
          <strong>Avatar</strong>
        </div>
      </div>
    );
  }
}

export default Profile;
