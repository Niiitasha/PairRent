import React, { Component } from 'react';
import ViewProfileInfo from './ViewProfileInfo';
import ProfileList from './ProfileList';

class ViewProfile extends Component {
    render() {
        return (
            <div className="viewProfile">
            <ProfileList />
            </div>
        );
    }
}

export default ViewProfile;