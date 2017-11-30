import React, { Component } from 'react';
import ProfileList from './ProfileList';
import NextBtn from './NextBtn'
import PrevBtn from './PrevBtn'

class Discover extends Component {
    render() {
        return (
            <div className="profileList">
                <PrevBtn className="directionBtns" />
                <ProfileList />
                <NextBtn className="directionBtns" />
            </div>
        );
    }
}

export default Discover;
