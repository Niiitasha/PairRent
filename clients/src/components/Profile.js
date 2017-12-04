import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render() {
        return (
            <div className="profileCard">
                <img alt="ProfileImage" src={this.props.profile.profilepic}></img>
                <p className="profileName">Name: {this.props.profile.name}</p>
                <p className="profileKids">Number of Kids: {this.props.profile.kids}</p>
                <p className="profileSmoker">Smoker: {this.props.profile.smoker}</p>
                <p className="profileNeeds">Needs: {this.props.profile.needs}</p>
                <p className="profileBio">Bio: {this.props.profile.bio}</p>
            </div>
        );
    }
}

export default Profile;
