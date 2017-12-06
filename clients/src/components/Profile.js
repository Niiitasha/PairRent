import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="profileCard">
                <div className="profileCardBackgroundDiv">
                    <div className="profileImageAndData">
                        <div className="profilePageImages">
                            <img alt="ProfileImage" src={this.props.profile.profilepic}></img>
                        </div>
                        <div className="profilePageData">
                            <p className="profileName">Name: {this.props.profile.name}</p>
                            <p className="profileKids">Number of Kids: {this.props.profile.kids}</p>
                            <p className="profileSmoker">Smoker: {this.props.profile.smoker}</p>
                            <p className="profileNeeds">Needs: {this.props.profile.needs}</p>
                            <p>Random Info Here</p>
                        </div>
                    </div>
                    <div className="profileBioOnly">
                        <p className="profileBio">Biography: {this.props.profile.bio}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
