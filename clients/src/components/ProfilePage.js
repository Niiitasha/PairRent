import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import ProfileList from './ProfileList';

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myIndex: 3,
        }
    }
    //profile to hold that profile

    render() {
        return (
            <div className="ProfilePage">
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(ProfilePage);
