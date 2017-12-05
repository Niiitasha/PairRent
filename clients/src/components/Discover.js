import React, { Component } from 'react';
import ProfileList from './ProfileList';

class Discover extends Component {
    render() {
        return (
            <div className="discoverMainDiv">
                <div className="discoverBackgroundDiv">
                    <ProfileList />
                </div>
            </div>
        );
    }
}

export default Discover;
