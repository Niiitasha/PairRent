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

    render() {
        const profiles = this.props.data.map((profile) => (
            <Profile key={profile.id} profile={profile} />
        ));
        return (
            <div className="ProfilePage">
                    {getProfileById(profiles, "3")}
            </div>
        );
    }
}

function getProfileById(arr, idNumber) {
    var result = arr.filter(function (prof) { return prof.key === idNumber; });
    return result ? result[0] : null;
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps)(ProfilePage);
